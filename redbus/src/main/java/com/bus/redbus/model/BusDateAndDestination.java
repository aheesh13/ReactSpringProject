package com.bus.redbus.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.sun.istack.NotNull;

@Entity
@Table(name = "BUS_DATE_DEST")
public class BusDateAndDestination {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@NotNull
	@Column(name="id")
	private int RecordId;
	
	@Column(name="BUS_DESTINATION")
	private String busDest;
	
	@Column(name="ROUTE")
	private String route;
	
	@Column(name="DATE")
	private Date date;
	
	@Column(name="DISTANCE")
	private String distance;
	
	@ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "FK_BUS_REC_ID")
    private Bus bus;

	public BusDateAndDestination(int recordId, String busDest, String route, Date date, Bus bus) {
		super();
		RecordId = recordId;
		this.busDest = busDest;
		this.route = route;
		this.date = date;
		this.bus = bus;
	}
	public BusDateAndDestination() {
		
	}

	@Override
	public String toString() {
		return "BusDateAndDestination [RecordId=" + RecordId + ", busDest=" + busDest + ", route=" + route + ", date="
				+ date + ", bus=" + bus + "]";
	}

	public int getRecordId() {
		return RecordId;
	}

	public void setRecordId(int recordId) {
		RecordId = recordId;
	}

	public String getBusDest() {
		return busDest;
	}

	public void setBusDest(String busDest) {
		this.busDest = busDest;
	}

	public String getRoute() {
		return route;
	}

	public void setRoute(String route) {
		this.route = route;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Bus getBus() {
		return bus;
	}

	public void setBus(Bus bus) {
		this.bus = bus;
	}
}
