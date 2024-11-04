using Microsoft.EntityFrameworkCore;

namespace PpTest.Infrastructure;

public class PpTestDbContext : DbContext
{
    public PpTestDbContext(DbContextOptions<PpTestDbContext> options)
        : base(options) { }
}
