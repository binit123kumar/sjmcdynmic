using System.Net.Http;
using System.Text;
using System.Text.Json;
using Microsoft.Extensions.Configuration;

namespace SJMC.CMS.API.Services
{
    public class AIService : IAIService
    {
        private readonly HttpClient _http;
        private readonly string? _apiKey;
        private readonly string? _baseUrl;
        private readonly string? _model;

        public AIService(HttpClient http, IConfiguration config)
        {
            _http = http;
            _apiKey = config["AI:ApiKey"];
            _baseUrl = config["AI:BaseUrl"]?.TrimEnd('/') ?? "https://api.openai.com/v1";
            _model = config["AI:Model"] ?? "gpt-4o-mini";
        }

        public bool IsAvailable => !string.IsNullOrWhiteSpace(_apiKey);

        public async Task<string?> GenerateContentAsync(string prompt)
        {
            if (!IsAvailable) return null;
            var response = await CallApiAsync(new[]
            {
                new ChatMessage { Role = "user", Content = prompt }
            });
            return response;
        }

        public async Task<string?> GenerateAltTextAsync(string imageDescription, string context)
        {
            if (!IsAvailable) return null;
            var prompt = $"Generate concise alt text for an image. Description: {imageDescription}. Context: {context}. Alt text should be under 125 characters.";
            return await CallApiAsync(new[]
            {
                new ChatMessage { Role = "user", Content = prompt }
            });
        }

        public async Task<string?> GenerateSummaryAsync(string content)
        {
            if (!IsAvailable) return null;
            var prompt = $"Summarize the following content in 2-3 sentences:\n\n{content}";
            return await CallApiAsync(new[]
            {
                new ChatMessage { Role = "user", Content = prompt }
            });
        }

        public async Task<string?> OptimizeSeoAsync(string title, string description)
        {
            if (!IsAvailable) return null;
            var prompt = $"Optimize the following meta title and description for SEO. Title: {title}. Description: {description}. Return JSON with fields: metaTitle, metaDescription, keywords (comma-separated).";
            return await CallApiAsync(new[]
            {
                new ChatMessage { Role = "user", Content = prompt }
            });
        }

        public async Task<string?> DraftContentAsync(string contentType, string topic)
        {
            if (!IsAvailable) return null;
            var prompt = $"Draft a short {contentType} about: {topic}. Keep it informative and appropriate for a website audience. 150-200 words.";
            return await CallApiAsync(new[]
            {
                new ChatMessage { Role = "user", Content = prompt }
            });
        }

        private async Task<string?> CallApiAsync(IEnumerable<ChatMessage> messages)
        {
            try
            {
                var payload = new
                {
                    model = _model,
                    messages,
                    max_tokens = 1000,
                    temperature = 0.7
                };
                var json = JsonSerializer.Serialize(payload);
                var request = new HttpRequestMessage(HttpMethod.Post, $"{_baseUrl}/chat/completions")
                {
                    Content = new StringContent(json, Encoding.UTF8, "application/json")
                };
                request.Headers.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", _apiKey);

                var response = await _http.SendAsync(request);
                if (!response.IsSuccessStatusCode) return null;

                var responseJson = await response.Content.ReadAsStringAsync();
                using var doc = JsonDocument.Parse(responseJson);
                var root = doc.RootElement;
                var choice = root.GetProperty("choices")[0];
                return choice.GetProperty("message").GetProperty("content").GetString();
            }
            catch
            {
                return null;
            }
        }

        private class ChatMessage
        {
            public string Role { get; set; } = string.Empty;
            public string Content { get; set; } = string.Empty;
        }
    }
}
