package com.bus.redbus.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bus.redbus.model.Bus;

public interface BusRepository extends JpaRepository<Bus, Long>{
	@Query(value = "select e.BUS_NAME from BUS e,BUS_DATE_DEST d WHERE e.BUS_REC_ID = d.FK_BUS_REC_ID and d.BUS_DESTINATION= ?1",nativeQuery = true)
	List<String> findByDest(String dest);

	@Query(value = "select e.BUS_NAME from BUS e,BUS_DATE_DEST d WHERE e.BUS_REC_ID = d.FK_BUS_REC_ID and d.DATE=?1 and d.BUS_DESTINATION= ?2 and e.BUS_TYPE =?3 and e.AC =?4",nativeQuery = true)
	List<String> findBus(String date,String dest,String type,String ac);
	
	@Query(value = "select e.BUS_TYPE from BUS e",nativeQuery = true)
	List<String> getBusType();
}
