using Microsoft.EntityFrameworkCore;

namespace Svc1.Infrastructure;

public class Svc1DbContext : DbContext
{
    public Svc1DbContext(DbContextOptions<Svc1DbContext> options)
        : base(options) { }
}
