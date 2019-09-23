// Copyright (c) 2019, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Appointment', {
	refresh: function(frm) {
		if(frm.doc.lead){
			frm.add_custom_button(__(frm.doc.lead),()=>{
				frappe.set_route("Form","Lead",frm.doc.lead)
			})
		}
		if(frm.doc.calendar_event){
			frm.add_custom_button(__(frm.doc.calendar_event),()=>{
				frappe.set_route("Form","Event",frm.doc.calendar_event)
			})
		}
	}
});
