namespace MyAuthApi.Models
{
    public class Item
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public string? Description { get; set; }

    }

    // public class User
    // {
    //     public int Id { get; set; }
    //     public required string Email { get; set; }
    //     public required string PasswordHash { get; set; }
    // }
}