using Microsoft.AspNetCore.Identity;

namespace Balistica.Domain.Identity
{
    public class UserRole : IdentityUserRole<int>
    {
        public User User { get; set; }
        public Role Role { get; set; }
    }
}