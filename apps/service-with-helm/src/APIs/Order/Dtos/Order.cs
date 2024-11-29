namespace ServiceWithHelm.APIs.Dtos;

public class Order
{
    public DateTime CreatedAt { get; set; }

    public string? Customer { get; set; }

    public string? Details { get; set; }

    public string Id { get; set; }

    public double? Price { get; set; }

    public DateTime UpdatedAt { get; set; }
}
