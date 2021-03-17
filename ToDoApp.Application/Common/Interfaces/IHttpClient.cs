using System.Threading.Tasks;

namespace Application.Common.Interfaces
{
    public interface IHttpClient
    {
        Task<string> GetStringAsync(string url);
    }
}
