package com.bus.redbus.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bus.redbus.model.Bus;

public interface BusService {

	
	public List<Bus>getAllBus();
//	public List<String>getAllBusOnDest(String dest);
	public List<String>getBusType();
	public List<String>getBusOnDetails(String date,String dest,String type,String ac);
}
