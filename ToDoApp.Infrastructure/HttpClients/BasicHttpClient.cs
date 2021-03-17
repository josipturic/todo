﻿using Application.Common.Interfaces;
using System.Net.Http;
using System.Threading.Tasks;

namespace Infrastructure.HttpClients
{
    public class BasicHttpClient : IHttpClient
    {
        private static readonly HttpClient Client = new HttpClient();
        public async Task<string> GetStringAsync(string url)
        {
            return await Client.GetStringAsync(url);
        }
    }
}
