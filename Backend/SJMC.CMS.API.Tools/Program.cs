using System;
using System.Threading.Tasks;

namespace SJMC.CMS.API.Tools
{
    class Program
    {
        private const string DefaultConnectionString =
            @"Server=localhost\SQLEXPRESS;Database=SJMC_CMS_DB;Trusted_Connection=True;TrustServerCertificate=True;";

        static async Task Main(string[] args)
        {
            var connectionString = Environment.GetEnvironmentVariable("ConnectionStrings__DefaultConnection");

            if (string.IsNullOrWhiteSpace(connectionString))
            {
                Console.Write("SQL Server connection string (press Enter for SQL Express default): ");
                var input = Console.ReadLine();
                connectionString = string.IsNullOrWhiteSpace(input) ? DefaultConnectionString : input.Trim();
            }

            await CreateAdmin.RunAsync(connectionString);
        }
    }
}