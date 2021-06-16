INSERT INTO kota (nama_kota, provinsi) VALUES ('Bandung', 'Jawa Barat');
INSERT INTO kota (nama_kota, provinsi) VALUES ('Jakarta Selatan', 'DKI Jakarta');
INSERT INTO kota (nama_kota, provinsi) VALUES ('Yogyakarta', 'Jawa Tengah');
INSERT INTO kota (nama_kota, provinsi) VALUES ('Surabaya', 'Jawa Timur');
INSERT INTO kota (nama_kota, provinsi) VALUES ('Semarang', 'Jawa Tengah');

INSERT INTO bank (nama_bank) VALUES ('Bank Mandiri');
INSERT INTO bank (nama_bank) VALUES ('Bank BCA');
INSERT INTO bank (nama_bank) VALUES ('Bank BRI');

INSERT INTO pemilik (nama_awal, nama_akhir, email, password, no_hp) VALUES ('faza', 'azka', 'fazainsyah@gmail.com', 'test123', '081232123');

INSERT INTO rekening (id_pemilik, id_bank, no_rek) VALUES (1, 1, 123212313);
INSERT INTO rekening (id_pemilik, id_bank, no_rek) VALUES (1, 2, 902120331);

INSERT INTO kost (id_pemilik, id_kota, nama_kost, alamat_kost, harga, jenis_kost, deskripsi, img)
VALUES (1, 6, 'Kost Mulawarman', 'PBB No.12A', 1200000, 'Wanita', 'Kamar lembab dan pengap. Kamar mandi kotor. Sering ada orang asing masuk. Terakhir ada yg masuk kamar. Dibilang tetangga sebelah. Saya nggak peduli itu siapa. Bayar mahal karena ingin mendapatkan kenyamanan. Kapok pakai mamikos.', 'kost1.png');VALUES (1, 1, 'Kost Mulawarman', 'PBB No.12A', 1200000, 'Wanita', 'Kamar lembab dan pengap. Kamar mandi kotor. Sering ada orang asing masuk. Terakhir ada yg masuk kamar. Dibilang tetangga sebelah. Saya nggak peduli itu siapa. Bayar mahal karena ingin mendapatkan kenyamanan. Kapok pakai mamikos.', 'kost1.png');

INSERT INTO kost (id_pemilik, id_kota, nama_kost, alamat_kost, harga, jenis_kost, deskripsi, img)
VALUES (1, 7, 'Kost Maman', 'PBB No.4732A', 900000, 'Pria', 'Kamar lembab dan pengap. Kamar mandi kotor. Sering ada orang asing masuk. Terakhir ada yg masuk kamar. Dibilang tetangga sebelah. Saya nggak peduli itu siapa. Bayar mahal karena ingin mendapatkan kenyamanan. Kapok pakai mamikos.', 'kost1.png');VALUES (1, 1, 'Kost Mulawarman', 'PBB No.12A', 1200000, 'Wanita', 'Kamar lembab dan pengap. Kamar mandi kotor. Sering ada orang asing masuk. Terakhir ada yg masuk kamar. Dibilang tetangga sebelah. Saya nggak peduli itu siapa. Bayar mahal karena ingin mendapatkan kenyamanan. Kapok pakai mamikos.', 'kost2.png');