using Microsoft.EntityFrameworkCore;

namespace ServiceWithHelm.Infrastructure;

public class ServiceWithHelmDbContext : DbContext
{
    public ServiceWithHelmDbContext(DbContextOptions<ServiceWithHelmDbContext> options)
        : base(options) { }
}
