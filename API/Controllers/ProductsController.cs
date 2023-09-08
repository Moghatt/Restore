using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {


        private readonly StoreContext _db;
        //private ApiResponse _response;

        public ProductsController(StoreContext db)
        {
            _db = db;
           // _response = new ApiResponse();
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            var products = await _db.Products.ToListAsync();
            return products;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var todo =  await _db.Products.FindAsync(id);
            return todo;
        }
    }
}