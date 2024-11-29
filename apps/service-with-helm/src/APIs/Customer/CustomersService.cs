using ServiceWithHelm.Infrastructure;

namespace ServiceWithHelm.APIs;

public class CustomersService : CustomersServiceBase
{
    public CustomersService(ServiceWithHelmDbContext context)
        : base(context) { }
}
