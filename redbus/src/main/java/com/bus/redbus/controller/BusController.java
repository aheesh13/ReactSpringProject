package com.bus.redbus.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bus.redbus.model.Bus;
import com.bus.redbus.service.impl.BusService;

@RestController
public class BusController {
	private BusService busService;
	@Autowired
	public BusController(BusService busService) {
		super();
		this.busService = busService;
	}

	 @RequestMapping("/")
	    @ResponseBody
	    public String helloWorld()
	    {
	        return "homesearch";
	    }
	 
	 @CrossOrigin
	 @RequestMapping("/getAllBus")
	    @ResponseBody
	    public String getAllBus()
	    {	 
		return busService.getAllBus().toString();
	        
	    }
	 
//	 @CrossOrigin
//	 @RequestMapping("/getAllBusOnDest")
//	 	@ResponseBody
//	 	public List<String> getAllBusOnDest(String dest){
//		 	return busService.getAllBusOnDest(dest);
//			
//	 }
	 
	 @CrossOrigin
	 @RequestMapping("/getBusTypes")
	 	@ResponseBody
	 	public List<String> getBusTypes(){
		 	return busService.getBusType();
			
	 }
	 
	 @CrossOrigin
	 @RequestMapping("/getBusDetails")
	 	@ResponseBody
	 	public List<String> getBusDetails(String date,String dest,String type,String ac){
		 	return busService.getBusOnDetails( date, dest, type, ac);
			
	 }
	 
}
