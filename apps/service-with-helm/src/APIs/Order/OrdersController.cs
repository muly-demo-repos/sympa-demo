using Microsoft.AspNetCore.Mvc;

namespace ServiceWithHelm.APIs;

[ApiController()]
public class OrdersController : OrdersControllerBase
{
    public OrdersController(IOrdersService service)
        : base(service) { }
}
