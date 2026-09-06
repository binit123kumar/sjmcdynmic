param(
    [string]$ApiBaseUrl = "https://localhost:7050",
    [string]$SourcePath = "../../Frontend/sjmc/src/asset",
    [Parameter(Mandatory = $true)]
    [string]$Token,
    [switch]$WhatIf
)

$ErrorActionPreference = "Stop"
$allowedExtensions = @(".jpg", ".jpeg", ".png", ".webp", ".gif", ".pdf", ".doc", ".docx")
$resolvedSource = (Resolve-Path $SourcePath).Path
$endpoint = "$($ApiBaseUrl.TrimEnd('/'))/api/media"

Add-Type -AssemblyName System.Net.Http
$client = New-Object System.Net.Http.HttpClient
$client.DefaultRequestHeaders.Authorization = New-Object System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", $Token)

try {
    $files = Get-ChildItem -Path $resolvedSource -File -Recurse | Where-Object {
        $allowedExtensions -contains $_.Extension.ToLowerInvariant()
    }
    Write-Host "Found $($files.Count) media files under $resolvedSource"

    foreach ($file in $files) {
        $relativeDirectory = $file.DirectoryName.Substring($resolvedSource.Length).TrimStart('\', '/')
        $category = if ([string]::IsNullOrWhiteSpace($relativeDirectory)) { "General" } else { $relativeDirectory.Replace('\', ' / ') }
        $title = [System.IO.Path]::GetFileNameWithoutExtension($file.Name) -replace '[_-]+', ' '
        $title = ($title -replace '\s+', ' ').Trim()
        if ([string]::IsNullOrWhiteSpace($title)) { $title = $file.Name }

        if ($WhatIf) {
            Write-Host "Would upload: $($file.Name) [$category]"
            continue
        }

        $form = New-Object System.Net.Http.MultipartFormDataContent
        $form.Add((New-Object System.Net.Http.StringContent($title)), "Title")
        $form.Add((New-Object System.Net.Http.StringContent($title)), "AltText")
        $form.Add((New-Object System.Net.Http.StringContent($category)), "Category")
        $form.Add((New-Object System.Net.Http.StringContent("true")), "IsActive")
        $form.Add((New-Object System.Net.Http.StringContent("1")), "DisplayOrder")

        $bytes = [System.IO.File]::ReadAllBytes($file.FullName)
        $content = New-Object System.Net.Http.ByteArrayContent(,$bytes)
        $content.Headers.ContentType = New-Object System.Net.Http.Headers.MediaTypeHeaderValue("application/octet-stream")
        $form.Add($content, "File", $file.Name)

        try {
            $response = $client.PostAsync($endpoint, $form).Result
            if (-not $response.IsSuccessStatusCode) {
                throw "HTTP $([int]$response.StatusCode)"
            }
            Write-Host "Uploaded: $($file.Name)"
        }
        catch {
            Write-Warning "Failed: $($file.FullName) - $($_.Exception.Message)"
        }
        finally {
            $form.Dispose()
        }
    }
}
finally {
    $client.Dispose()
}
