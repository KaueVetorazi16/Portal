using System.IO;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Balistica.Domain;
using Balistica.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace Balistica.API.Controllers
{

    [Route("portal/[controller]")]
    [ApiController]
    public class ArmaController : ControllerBase
    {
        private readonly IBalisticaRepository _repo;

        public ArmaController(IBalisticaRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var results = await _repo.GetAllArmaAsync();
                return Ok(results);
            }
            catch (System.Exception)
            {
                
               return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de dados falhou");
            }
           
        }

        [HttpPost("upload")]
        public async Task<IActionResult> upload()
        {
            try
            {
                var file = Request.Form.Files[0];
                var folderName = Path.Combine("Resources","Images");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(),folderName);

            if(file.Length > 0 ){
                var filename = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName;
                var fullPath = Path.Combine(pathToSave, filename.Replace("\""," ").Trim());

                using (var stream = new FileStream(fullPath, FileMode.Create)){
                  await file.CopyToAsync(stream);
                }
            }

                return Ok();
            }
            catch (System.Exception)
            {
                
               return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de dados falhou");
            }

            return BadRequest("Erro ao tentar realizar upload");
           
        }


        [HttpGet("{ArmaId}")]
        public async Task<IActionResult> Get(int ArmaId)
        {
            try
            {
                var results = await _repo.GetArmaAsyncById(ArmaId);
                return Ok(results);
            }
            catch (System.Exception)
            {
                
               return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de dados falhou");
            }
           
        }

        [HttpGet("getByMarca{marca}")]
        public async Task<IActionResult> Get(string marca)
        {
            try
            {
                var results = await _repo.GetAllArmaAsyncByMarca(marca);
                return Ok(results);
            }
            catch (System.Exception)
            {
                
               return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de dados falhou");
            }
           
        }

        [HttpPost]
        public async Task<IActionResult> Post(Arma model)
        {
            try
            {
                _repo.Add(model);

                if(await _repo.SaveChangesAsync()){
                    return Created($"/portal/arma/{model.Id}", model);
                }
                
            }
            catch (System.Exception)
            {
                
               return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de dados falhou");
            }

            return BadRequest();
           
        }

        [HttpPut("{armaId}")]
        public async Task<IActionResult> Put(int armaId, Arma model)
        {
            try
            {

                var arma = await _repo.GetArmaAsyncById(armaId);
                if(arma == null) return NotFound();

                _repo.Update(model);

                if(await _repo.SaveChangesAsync()){
                    return Created($"/portal/arma/{model.Id}", model);
                }
                
            }
            catch (System.Exception)
            {
                
               return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de dados falhou");
            }

            return BadRequest();
           
        }

        [HttpDelete("{armaId}")]
        public async Task<IActionResult> Delete(int armaId)
        {
            try
            {

                var arma = await _repo.GetArmaAsyncById(armaId);
                if(arma == null) return NotFound();

                _repo.Delete(arma);

                if(await _repo.SaveChangesAsync()){
                    return Ok();
                }
                
            }
            catch (System.Exception)
            {
                
               return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de dados falhou");
            }

            return BadRequest();
           
        }
    }
}