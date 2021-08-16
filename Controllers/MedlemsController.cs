using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using angular_new_app.Models;
using angular_new_app.Services;
using angular_new_app.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

using System.Windows.Forms;

namespace angular_new_app.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
//	[Route("api/[controller]/[action]")]    
    public class MedlemsController : ControllerBase
    {
        private readonly IMedlemsService _medlemService;

		
//		private readonly BlogContext  _Context;
  
	
        public MedlemsController(IMedlemsService medlemService)
        {
            _medlemService = medlemService;
        }

		
        // GET: api/Players	
        [HttpGet]
        public async Task<IEnumerable<Medlem>> Get()
        {
            return await _medlemService.GetMedlemsList();
        }

       

        // GET: api/Players/5
		//[Route("medlems/{id:int}")]   ikke dette tilfelle,
		//[Route("medlems/{id:guid}")]
        //[HttpGet("medlems/{id:guid}")]
         [HttpGet("{id:guid}")]
        public async Task<ActionResult<Medlem>> Get(Guid id)
        {
            var medlem = await _medlemService.GetMedlemById(id);

            if (medlem == null)
            {
                return NotFound();
            }

            return Ok(medlem);
        }
		  
             
   
        //[Route("medlems/{etternavn}")]
        //[HttpGet("medlems/{etternavn}")]
		 [HttpGet("{navn}")]
        public async Task<ActionResult<Medlem>> Get(string navn)
        {
           
//		   var medlem = await _medlemService.GetMedlemByEtternavn(navn);
 
			//alert(medlem);
	//		MessageBox.Show(   Convert.ToString(medlem)    ,"fdf");
			//window.alert(medlem);
			
			//string line = "fdgdf    wfie";
            //string[] word = line.Split(' ');
            //Console.WriteLine("Words " + word.Length);
			
			/*
			string my_string = "fbdff dfdf  ";
			string[] array = my_string.Split(' ');
            string first = array[0];
            string last = array[array.Length - 1]; 
            */
            //Console.WriteLine(first + " " + last);
           ///////////////////////////////////////////////
		     
		    
		   string[] array = navn.Split(' ');
		   string fornavn = array[0];
           string etternavn = array[array.Length - 1]; 
           
			Object obj=new Object();
            obj="hi";
						
            //return Ok(obj);
			//var medlem;
			
            /*			
			if(fornavn != etternavn)  {
			   obj="hi" + " "  +fornavn + " "+ etternavn;
			   return Ok(obj);
			}	
			else {
			   obj="hi" + " "+ fornavn;
			   return Ok(obj);
			}	
            */
			

		    /*
			if(fornavn != etternavn)  {
			   
			   var medlem1 = await _medlemService.GetMedlemByFornavn(fornavn);
               var medlem2  = await  _medlemService.GetMedlemByEtternavn(etternavn);
			   var medlem4  = await  _medlemService.GetMedlemByEtternavn(fornavn);
			   var medlem5  = await  _medlemService.GetMedlemByFornavn(etternavn);
			   var medlem8  = await  _medlemService.GetMedlemByFullnavn(etternavn, fornavn);
			    
			   
			   if( (medlem1  !=  null)   &&  (medlem2  ==  null)   )  {
                   return Ok(medlem1);    
			   }//if	   
				else 
                if( (medlem2  !=  null)    &&  (medlem1  ==  null) )  {
                   return Ok(medlem2);    
			   }//if	   
				else 
                 if(  (medlem4  !=  null)   &&  (medlem5  ==  null) )  {
                   return Ok(medlem4);    
			   }
				else 
                 if(  (medlem5  !=  null)   &&  (medlem4  ==  null)  )  {
                   return Ok(medlem5);    
			   }
			   else 
                 if(  (medlem1  !=  null)   &&  (medlem2  !=  null)     )  {
                   return Ok(medlem8);    
			   }
			} //////////////////////////////////	
			else {
                   
                   var medlem55 = await _medlemService.GetMedlemByFornavn(fornavn);
				   
				   var medlem56  = await  _medlemService.GetMedlemByFornavn(etternavn);
				   
				   var medlem57 = await _medlemService.GetMedlemByEtternavn(etternavn);
				   
				   var medlem58  = await  _medlemService.GetMedlemByEtternavn(fornavn);
				   
			   	   if(medlem55  !=  null)  {
                      return Ok(medlem55);    
			       }//if	   
                   else if(medlem56  !=  null)  {
                      return Ok(medlem56);    
			       }
				   else if(medlem57  !=  null)  {
                      return Ok(medlem57);    
			       }
				   else if(medlem58  !=  null)  {
                      return Ok(medlem58);    
			       }
			}////////////////////////////////////////////////////////////////////////////////////////////
			
			
             return Ok(obj);			
			
			*/
			
			/*
	        var medlem8  = await  _medlemService.GetMedlemByFullnavn(etternavn, fornavn);
						   
			if (medlem8 != null)
            {
                //return NotFound("ETTERNOFOUND");
				return Ok(medlem8);
            }

			*/ 
			
			
            //medlem = await _medlemService.GetMedlemByFornavn(fornavn);
            /*
			if (_medlemService.GetMedlemByFornavn(fornavn)  !=  null) {
				var medlem1 = await  _medlemService.GetMedlemByFornavn(fornavn);
                return Ok(medlem1);
                //break;
			}
			else if (_medlemService.GetMedlemByEtternavn(etternavn)  !=  null) {
                var medlem2  = await  _medlemService.GetMedlemByEtternavn(etternavn);
				return Ok(medlem2);
                //break;
			}	
			else if (_medlemService.GetMedlemByEtternavn(fornavn)  !=  null) {
                
				var medlem4  = await  _medlemService.GetMedlemByEtternavn(fornavn);
				return Ok(medlem4);
                //break;
			}
			else if (_medlemService.GetMedlemByFornavn(etternavn)  !=  null) {
                var medlem5  = await  _medlemService.GetMedlemByFornavn(etternavn);
				return Ok(medlem5);
                //break;
			}
			*/
			
			/*
			else  {
                return Ok(obj);
                //break;
			}
			*/
			 

			 
			/*			
			if (etternavn  !=  null) {
			    medlem2 = await _medlemService.GetMedlemByEtternavn(etternavn);
                medlem5 = await _medlemService.GetMedlemByFornavn(etternavn);
			}
			*/
			
			//var medlem4 = await _medlemService.GetMedlemByEtternavn(fornavn);
            
			/*
		    switch (medlem)
            {
    		  
			  medlem = await _medlemService.GetMedlemByFornavn(fornavn);
			  case  medlem != null; //(  medlem = await _medlemService.GetMedlemByFornavn(fornavn) ) :
			  //if(medlem != null)  
			  return Ok(medlem);
              break;
              
			  medlem = await _medlemService.GetMedlemByEtternavn(etternavn);
			  case   medlem != null;
			  //if(medlem != null)  
			  return Ok(medlem);
              break;
              
			  medlem = await _medlemService.GetMedlemByEtternavn(fornavn) :
			  case   medlem != null;
			  return Ok(medlem);
              break;
			  
			  medlem = await _medlemService.GetMedlemByFornavn(etternavn) :
			  case   medlem != null;
			  return Ok(medlem);
              break;
              
              
			  default:
              return Ok(obj);
              break;
              }/////////////////////////////////////
		    */
			
			/* 
		    var medlem = await _medlemService.GetMedlemByFornavn(fornavn);
			
            if (medlem != null)
            {
                //return NotFound("ETTERNOFOUND");
				return Ok(medlem);
            }

            //  return NotFound("ETTERNOFOUND");
			    return Ok(obj);
             */

			 
			if(fornavn != etternavn)  {
			   var medlem = await _medlemService.GetMedlemByFullnavn(etternavn, fornavn);
			    if (medlem != null)
               {
                   //return NotFound("ETTERNOFOUND");
				   return Ok(medlem);
                }
			}	
			else {

                           var medlemfor  = await _medlemService.GetMedlemByFornavn(fornavn);
			               var medlemetter  = await _medlemService.GetMedlemByEtternavn(fornavn);
            				
						   if (medlemfor  !=  null)
                           {
				                return Ok(medlemfor);
                            }
							else if (medlemetter  !=  null)
                           {
				                return Ok(medlemetter);
                            }
														
			}
			///////////////////////////////////////////////////////////////////////////////////////
			
              
            //  return NotFound("ETTERNOFOUND");
			    return Ok(obj);
			 
			 
            //return Ok(_medlemService.GetMedlemByEtternavn(etternavn));
	//		await  _medlemService.GetMedlemByEtternavn(etternavn);
      //      return NoContent();			
        }/////////////////////////////////////////////////////////////////////////////
		
   
   
        // POST: api/Players
        
		[HttpPost]
        public async Task<ActionResult<Medlem>> Post(Medlem medlem)
        {
            await _medlemService.CreateMedlem(medlem);

            return CreatedAtAction("Post", new { id = medlem.Medlem_Id }, medlem);
        }
        
		 
		
        // PUT: api/Players/5
		[HttpPut("{id}")]
        public async Task<IActionResult> Put(Guid id, Medlem medlem)
        {
            if (id != medlem.Medlem_Id)
            {
                return BadRequest("Not a valid player id");
            }
             
            await _medlemService.UpdateMedlem(medlem);
             
            return NoContent();
        }
		

        // DELETE: api/Players/5
        
		[HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            if (id == null)
                return BadRequest("Not a valid player id");

            var medlem = await _medlemService.GetMedlemById(id);
            if (medlem == null)
            {
                return NotFound();
            }

            await _medlemService.DeleteMedlem(medlem);

            return NoContent();
        }
		
		
    }
}
