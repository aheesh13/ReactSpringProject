package com.bus.redbus.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.sun.istack.NotNull;

@Entity
@Table(name = "BUS_SEAT_MAPPING")
public class BusSeatMapping {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@NotNull
	@Column(name="id")
	private int RecordId;
	
	@Column(name="SEAT_MAPPER")
	private String seatMapper;

	@Override
	public String toString() {
		return "BusSeatMapping [RecordId=" + RecordId + ", seatMapper=" + seatMapper + "]";
	}

	public BusSeatMapping(int recordId, String seatMapper) {
		super();
		RecordId = recordId;
		this.seatMapper = seatMapper;
	}
	
	public BusSeatMapping() {
		
	}

	public int getRecordId() {
		return RecordId;
	}

	public void setRecordId(int recordId) {
		RecordId = recordId;
	}

	public String getSeatMapper() {
		return seatMapper;
	}

	public void setSeatMapper(String seatMapper) {
		this.seatMapper = seatMapper;
	}
		
}
