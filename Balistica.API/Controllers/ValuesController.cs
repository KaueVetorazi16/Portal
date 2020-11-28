using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Balistica.API.Model;
using Balistica.API.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace Balistica.API.Controllers
{
    // configuração de rota
    [Route("portal/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        public DataContext Context { get; }

        public ValuesController(DataContext context)
        {
            this.Context = context;

        }

        // GET api/values
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var results = await Context.Armas.ToListAsync();
                return Ok(results);
            }
            catch (System.Exception)
            {
                
               return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de dados falhou");
            }
           
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
          
            try
            {
             var results = await Context.Armas.FirstOrDefaultAsync(x => x.ArmaId == id);   
             return Ok(results);
            }
            catch (System.Exception)
            {
                
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de dados falhou");
            }

        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
