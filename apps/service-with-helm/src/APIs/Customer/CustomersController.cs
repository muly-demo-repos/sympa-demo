using Microsoft.AspNetCore.Mvc;

namespace ServiceWithHelm.APIs;

[ApiController()]
public class CustomersController : CustomersControllerBase
{
    public CustomersController(ICustomersService service)
        : base(service) { }
}
