using ServiceWithHelm.Infrastructure;

namespace ServiceWithHelm.APIs;

public class OrdersService : OrdersServiceBase
{
    public OrdersService(ServiceWithHelmDbContext context)
        : base(context) { }
}
