SQL 2014 kullanımı



database e gelip "new database" seçeneğine tıkla

yeni isim verip onun alt klasöründe tables te veriler oluştur
per no, adi, soyadi vs sonra bunları int veya nvarchar olarak kaydet

new query seçeneğine tıkla ve gelen ekrana şu konumtları yazdıktan sonra ! execute(F5) butonuna tıkla

veya vt ye sağ tılayıp new query de 

------------------

use isyeri /kullanılacak vt

select name from sys.tables //isim seç sys.tables ten

select adi from personel 
//personel deki adi değerlerini seç

select distinct il from personel  
//distinct ile benzersiz olanları ayıkla


	#isimler isyeri veritabanı için geçerlidir
	select * from personel where adi='vehbi' or adi='murat'
	//seç "personel" hepsinden nereden? adı vehbi VEYA murat olanları (( or yerine and, not gelebilir))


	select (adi+ ' '+soyadi+'   ' +bolum) from okul
	// komut birleştirme

------- Where komutu
			select * from personel where 2500 >=maas and 1350 <= maas
					// where komutu hangi değerlerin seçilmesi gerktir
						// maaşı 1350 ve 2500 arası olan değerler
						
			select * from personel order by soyadi (varsayılan değer asc) //order by sıralama için kullanılır
			ORDER BY // ascending veya descending asc - desc


			select * from personel where bolum='arge' and maas>=2000
			SEÇİM YAPMAK//arge bölümünde maaşı 2000 den fazla olan
			
			
	select ogrenci as "Öğrenci no" (tek, çift tırnak ve köşeli parantez olabilir )
	AS //takma isim kullanmak için as kullanılır (ama as yazılmasa da olur)


	
	select ogrenci, adi, soyadi, vize,vize*1.1 as "artan vize" from okul
	//   				vizeyi 1.1 ile çarp, adı da"artan vize" olsun


	



------- Like komutu

		select * from okul where bolum like 'b%' ( '__b%' sadece üçüncü karakteri b olanlar...)
		LİKE // bölüm sütununda b ile başlayan veriler 


		'[a-h]%' adı a ile h arasında olan değerler 
		'[^a-h]%' üsttekinin tam tersi 