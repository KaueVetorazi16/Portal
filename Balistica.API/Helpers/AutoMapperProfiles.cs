using AutoMapper;
using Balistica.API.Dtos;
using Balistica.Domain;
using Balistica.Domain.Identity;

namespace Balistica.API.Helpers
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Arma, ArmaDto>().ReverseMap();
            CreateMap<User, UserDto>().ReverseMap();
            CreateMap<User, UserLoginDto>().ReverseMap();
        }   
    }
}