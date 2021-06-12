-- SELECT * FROM pemilik;
-- SELECT * FROM rekening;
-- SELECT * FROM bank;
SELECT * FROM kost;
SELECT * FROM kota;
SELECT * FROM penyewa;
SELECT * FROM pembayaran;

-- DELETE FROM penyewa
-- WHERE id_penyewa = 2;

INSERT INTO kota (nama_kota, provinsi) VALUES ('Bandung', 'Jawa Barat');
INSERT INTO kota (nama_kota, provinsi) VALUES ('Jakarta Selatan', 'DKI Jakarta');
INSERT INTO kota (nama_kota, provinsi) VALUES ('Yogyakarta', 'Jawa Tengah');
INSERT INTO kota (nama_kota, provinsi) VALUES ('Surabaya', 'Jawa Timur');
INSERT INTO kota (nama_kota, provinsi) VALUES ('Semarang', 'Jawa Tengah');

INSERT INTO bank (nama_bank) VALUES ('Bank Mandiri');
INSERT INTO bank (nama_bank) VALUES ('Bank BCA');
INSERT INTO bank (nama_bank) VALUES ('Bank BRI');

INSERT INTO pemilik (nama_awal, nama_akhir, email, password, no_hp) VALUES ('faza', 'azka', 'fazainsyah@gmail.com', 'test123', '081232123');

INSERT INTO rekening (id_pemilik, id_bank, no_rek) VALUES (1, 4, 123212313);
INSERT INTO rekening (id_pemilik, id_bank, no_rek) VALUES (1, 5, 902120331);


INSERT INTO kost (id_pemilik, id_kota, nama_kost, alamat_kost, harga, jenis_kost, deskripsi, img)
VALUES (1, 6, 'Kost Mulawarman', 'PBB No.12A', 1200000, 'Wanita', 'Kamar lembab dan pengap. Kamar mandi kotor. Sering ada orang asing masuk. Terakhir ada yg masuk kamar. Dibilang tetangga sebelah. Saya nggak peduli itu siapa. Bayar mahal karena ingin mendapatkan kenyamanan. Kapok pakai mamikos.', 'kost1.png');VALUES (1, 1, 'Kost Mulawarman', 'PBB No.12A', 1200000, 'Wanita', 'Kamar lembab dan pengap. Kamar mandi kotor. Sering ada orang asing masuk. Terakhir ada yg masuk kamar. Dibilang tetangga sebelah. Saya nggak peduli itu siapa. Bayar mahal karena ingin mendapatkan kenyamanan. Kapok pakai mamikos.', 'kost1.png');

INSERT INTO kost (id_pemilik, id_kota, nama_kost, alamat_kost, harga, jenis_kost, deskripsi, img)
VALUES (1, 7, 'Kost Maman', 'PBB No.4732A', 900000, 'Pria', 'Kamar lembab dan pengap. Kamar mandi kotor. Sering ada orang asing masuk. Terakhir ada yg masuk kamar. Dibilang tetangga sebelah. Saya nggak peduli itu siapa. Bayar mahal karena ingin mendapatkan kenyamanan. Kapok pakai mamikos.', 'kost1.png');VALUES (1, 1, 'Kost Mulawarman', 'PBB No.12A', 1200000, 'Wanita', 'Kamar lembab dan pengap. Kamar mandi kotor. Sering ada orang asing masuk. Terakhir ada yg masuk kamar. Dibilang tetangga sebelah. Saya nggak peduli itu siapa. Bayar mahal karena ingin mendapatkan kenyamanan. Kapok pakai mamikos.', 'kost2.png');

-- SELECT * FROM rekening INNER JOIN bank ON bank.id_bank = rekening.id_bank INNER JOIN pemilik ON rekening.id_pemilik = pemilik.id_pemilik WHERE pemilik.id_pemilik=1;
-- SELECT * FROM kost INNER JOIN kota ON kost.id_kota=kota.id_kota INNER JOIN pemilik ON pemilik.id_pemilik = kost.id_pemilik WHERE id_kost = 1;http://127.0.0.1:54170/datagrid/panel/7030331?is_query_tool=true&sgid=1&sid=1&server_type=pg&did=16790#http://127.0.0.1:54170/datagrid/panel/7030331?is_query_tool=true&sgid=1&sid=1&server_type=pg&did=16790#
-- SELECT * FROM pembayaran INNER JOIN penyewa ON pembayaran.id_penyewa = penyewa.id_penyewa WHERE penyewa.id_penyewa=1 LIMIT 1;