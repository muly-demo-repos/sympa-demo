using Microsoft.AspNetCore.Mvc;
using ServiceWithHelm.APIs.Common;
using ServiceWithHelm.Infrastructure.Models;

namespace ServiceWithHelm.APIs.Dtos;

[BindProperties(SupportsGet = true)]
public class CustomerFindManyArgs : FindManyInput<Customer, CustomerWhereInput> { }
