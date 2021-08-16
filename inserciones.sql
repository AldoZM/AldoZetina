
insert into CLIENTE values('TOGE100853','Torres','Guitierrez','Erendira','Rio Nativitas',4,'Presidentes de Mexico',09770,'CDMX');
insert into CLIENTE values('MASG730516','Martinez','Solano','Genaro','Rio Nazas',62,'Puente Blanco',09740,'CDMX');

insert into VENTA(fecha_venta,rfc_cliente) values('2021/08/12','TOGE100853');
insert into VENTA(fecha_venta,rfc_cliente) values('2021/08/13','MASG730516');
insert into VENTA(fecha_venta,rfc_cliente) values('2021/08/12','TOGE100853');
insert into VENTA(fecha_venta,rfc_cliente) values('2023/08/13','MASG730516');

insert into DETALLE_VENTA(num_venta,id_producto,precio_producto,canticad_producto,venta_total) values(1,1,150.50,50,20);
insert into DETALLE_VENTA(num_venta,id_producto,precio_producto,canticad_producto,venta_total) values(2,3,75.50,20,5);
insert into DETALLE_VENTA(num_venta,id_producto,precio_producto,canticad_producto,venta_total) values(1,2,35.80,35,15);
insert into DETALLE_VENTA(num_venta,id_producto,precio_producto,canticad_producto,venta_total) values(2,5,65.79,14,5);
insert into DETALLE_VENTA(num_venta,id_producto,precio_producto,canticad_producto,venta_total) values(1,4,200.45,85,50);
insert into DETALLE_VENTA(num_venta,id_producto,precio_producto,canticad_producto,venta_total) values(2,7,96.35,10,3);
insert into DETALLE_VENTA(num_venta,id_producto,precio_producto,canticad_producto,venta_total) values(1,6,3.50,9,2);

insert into provedor values ('Tabibito','bell', 'Mexico', 332145,'progreso',32545245,'mario','zetina','hernandez');
insert into provedor values ('Baal','Veracruz', 'Acapulco', 346549,'Princeso',85885849,'maria','fernandez','elles');
insert into provedor values ('Anna zopes','Roma', 'Chilpansingo', 697712,'echero',68714552,'fer','rivera','ellus');
insert into provedor values ('Yakup','Ejido', 'oaxaca', 876214,'Veter',78242353,'aldo','zunigan','Kelog');
insert into provedor values ('Dares','Juarez', 'Carranza', 674259,'meche',24626687,'keching','flores','cococabra');
insert into provedor values ('Jim s','Yoshida', 'cheverria', 864752,'prote',64458451,'noelle','Seferid','lickbutter');



