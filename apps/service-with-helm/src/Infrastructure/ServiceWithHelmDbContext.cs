using Microsoft.EntityFrameworkCore;
using ServiceWithHelm.Infrastructure.Models;

namespace ServiceWithHelm.Infrastructure;

public class ServiceWithHelmDbContext : DbContext
{
    public ServiceWithHelmDbContext(DbContextOptions<ServiceWithHelmDbContext> options)
        : base(options) { }

    public DbSet<CustomerDbModel> Customers { get; set; }

    public DbSet<OrderDbModel> Orders { get; set; }
}
