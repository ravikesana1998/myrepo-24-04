using Microsoft.EntityFrameworkCore;
using MyAuthApi.Models;

namespace MyAuthApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Item> Items { get; set; } // Example DbSet
    }
}