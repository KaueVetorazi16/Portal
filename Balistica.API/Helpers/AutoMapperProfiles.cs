using AutoMapper;
using Balistica.API.Dtos;
using Balistica.Domain;

namespace Balistica.API.Helpers
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Arma, ArmaDto>();
        }   
    }
}