# SJMC CMS Smoke Test Script
# Tests all admin CRUD operations and verifies auth protection

param(
    [string]$BaseUrl = "http://localhost:5050"
)

$ErrorActionPreference = "Stop"

Write-Host "=== SJMC CMS Smoke Test ===" -ForegroundColor Cyan
Write-Host "Base URL: $BaseUrl" -ForegroundColor Gray
Write-Host ""

# Get admin password securely
$password = Read-Host "Enter admin password" -AsSecureString
$plainPassword = [System.Runtime.InteropServices.Marshal]::PtrToStringBSTR([System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($password))

# Login and get token
$loginBody = @{
    username = "sjmcadmin"
    password = $plainPassword
} | ConvertTo-Json

try {
    $response = Invoke-RestMethod -Uri "$BaseUrl/api/auth/login" -Method Post -Body $loginBody -ContentType "application/json"
    $token = $response.data.token
    Write-Host "✓ Login successful" -ForegroundColor Green
} catch {
    Write-Host "✗ Login failed: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

$headers = @{
    Authorization = "Bearer $token"
}

# Module endpoints to test
$modules = @(
    "about", "faculty", "staff", "gallery", "news", "events", "notice", 
    "slider", "courses", "downloads", "publications", "contentpages", "media"
)

# Settings endpoint (uses PUT instead of POST)
$settingsEndpoints = @("settings")

# Results table
$results = [System.Collections.Generic.List[PSCustomObject]]::new()

# Test each module
foreach ($module in $modules) {
    Write-Host "Testing module: $module" -ForegroundColor Yellow
    
    # Test 1: Verify 401 without token (using POST as a representative write operation)
    try {
        $testData = @{ title = "Test" } | ConvertTo-Json
        $response = Invoke-WebRequest -Uri "$BaseUrl/api/$module" -Method Post -Body $testData -ContentType "application/json" -UseBasicParsing
        $results.Add([PSCustomObject]@{ Module = $module; Operation = "401 without token"; Status = "FAIL - Expected 401" })
    } catch {
        if ($_.Exception.Response.StatusCode.value__ -eq 401) {
            $results.Add([PSCustomObject]@{ Module = $module; Operation = "401 without token"; Status = "PASS" })
        } else {
            $results.Add([PSCustomObject]@{ Module = $module; Operation = "401 without token"; Status = "FAIL - $($_.Exception.Message)" })
        }
    }
    
    # Test 2: GET (public, should work)
    try {
        $response = Invoke-RestMethod -Uri "$BaseUrl/api/$module" -Method Get -UseBasicParsing
        $results.Add([PSCustomObject]@{ Module = $module; Operation = "GET list"; Status = "PASS" })
    } catch {
        $results.Add([PSCustomObject]@{ Module = $module; Operation = "GET list"; Status = "FAIL - $($_.Exception.Message)" })
    }
    
    # Test 3: CREATE (with auth) - minimal data
    $testData = @{
        title = "Smoke Test Item"
        description = "Test"
        displayOrder = 999
        isActive = $false
    } | ConvertTo-Json
    
    try {
        $response = Invoke-RestMethod -Uri "$BaseUrl/api/$module" -Method Post -Body $testData -ContentType "application/json" -Headers $headers
        $createdId = $response.data.id
        $results.Add([PSCustomObject]@{ Module = $module; Operation = "CREATE"; Status = "PASS" })
    } catch {
        $results.Add([PSCustomObject]@{ Module = $module; Operation = "CREATE"; Status = "FAIL - $($_.Exception.Message)" })
        $createdId = $null
    }
    
    # Test 4: UPDATE (with auth, if create succeeded)
    if ($createdId) {
        $updateData = @{
            title = "Smoke Test Item Updated"
            description = "Test Updated"
            displayOrder = 998
            isActive = $false
        } | ConvertTo-Json
        
        try {
            $response = Invoke-RestMethod -Uri "$BaseUrl/api/$module/$createdId" -Method Put -Body $updateData -ContentType "application/json" -Headers $headers
            $results.Add([PSCustomObject]@{ Module = $module; Operation = "UPDATE"; Status = "PASS" })
        } catch {
            $results.Add([PSCustomObject]@{ Module = $module; Operation = "UPDATE"; Status = "FAIL - $($_.Exception.Message)" })
        }
        
        # Test 5: DELETE (with auth, to clean up)
        try {
            $response = Invoke-RestMethod -Uri "$BaseUrl/api/$module/$createdId" -Method Delete -Headers $headers
            $results.Add([PSCustomObject]@{ Module = $module; Operation = "DELETE"; Status = "PASS" })
        } catch {
            $results.Add([PSCustomObject]@{ Module = $module; Operation = "DELETE"; Status = "FAIL - $($_.Exception.Message)" })
        }
    } else {
        $results.Add([PSCustomObject]@{ Module = $module; Operation = "UPDATE"; Status = "SKIP" })
        $results.Add([PSCustomObject]@{ Module = $module; Operation = "DELETE"; Status = "SKIP" })
    }
}

# Test Settings (uses PUT)
foreach ($module in $settingsEndpoints) {
    Write-Host "Testing module: $module" -ForegroundColor Yellow
    
    # Test 401 without token
    try {
        $response = Invoke-WebRequest -Uri "$BaseUrl/api/$module" -Method Put -UseBasicParsing
        $results.Add([PSCustomObject]@{ Module = $module; Operation = "401 without token"; Status = "FAIL - Expected 401" })
    } catch {
        if ($_.Exception.Response.StatusCode.value__ -eq 401) {
            $results.Add([PSCustomObject]@{ Module = $module; Operation = "401 without token"; Status = "PASS" })
        } else {
            $results.Add([PSCustomObject]@{ Module = $module; Operation = "401 without token"; Status = "FAIL" })
        }
    }
    
    # Test GET (public)
    try {
        $response = Invoke-RestMethod -Uri "$BaseUrl/api/$module" -Method Get -UseBasicParsing
        $results.Add([PSCustomObject]@{ Module = $module; Operation = "GET"; Status = "PASS" })
    } catch {
        $results.Add([PSCustomObject]@{ Module = $module; Operation = "GET"; Status = "FAIL" })
    }
    
    # Test PUT (with auth)
    $updateData = @{
        siteName = "SJMC Smoke Test"
        address = "Test Address"
        phone = "1234567890"
        email = "test@sjmc.edu"
    } | ConvertTo-Json
    
    try {
        $response = Invoke-RestMethod -Uri "$BaseUrl/api/$module" -Method Put -Body $updateData -ContentType "application/json" -Headers $headers
        $results.Add([PSCustomObject]@{ Module = $module; Operation = "PUT"; Status = "PASS" })
    } catch {
        $results.Add([PSCustomObject]@{ Module = $module; Operation = "PUT"; Status = "FAIL - $($_.Exception.Message)" })
    }
}

# Print results table
Write-Host ""
Write-Host "=== Test Results ===" -ForegroundColor Cyan
$results | Format-Table -AutoSize

# Summary
$passCount = ($results | Where-Object { $_.Status -eq "PASS" }).Count
$failCount = ($results | Where-Object { $_.Status -like "FAIL*" }).Count
$skipCount = ($results | Where-Object { $_.Status -eq "SKIP" }).Count
$totalCount = $results.Count

Write-Host ""
Write-Host "Total: $totalCount | PASS: $passCount | FAIL: $failCount | SKIP: $skipCount" -ForegroundColor $(if ($failCount -eq 0) { "Green" } else { "Red" })

if ($failCount -gt 0) {
    Write-Host ""
    Write-Host "Failed tests:" -ForegroundColor Red
    $results | Where-Object { $_.Status -like "FAIL*" } | Format-Table -AutoSize
    exit 1
} else {
    Write-Host "All tests passed!" -ForegroundColor Green
    exit 0
}
