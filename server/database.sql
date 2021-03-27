CREATE TABLE promo(
    id_promo SERIAL PRIMARY KEY,
    gambar VARCHAR(128),
    poster VARCHAR(128)
);

CREATE TABLE bank(
    id_bank SERIAL PRIMARY KEY,
    nama_bank VARCHAR(64)
);

CREATE TABLE rekening(
    id_rekening SERIAL PRIMARY KEY, 
    id_bank SERIAL, 
    no_rek VARCHAR(64),

    CONSTRAINT fk_bank
        FOREIGN KEY (id_bank)
            REFERENCES bank(id_bank)
);

CREATE TABLE admin(
    id_admin SERIAL PRIMARY KEY, 
    email VARCHAR(64), 
    password VARCHAR(64)

);

CREATE TABLE penyewa(
    id_penyewa SERIAL PRIMARY KEY,
    nama_awal VARCHAR(32),
    nama_akhir VARCHAR(32),
    email VARCHAR(64), 
    password VARCHAR(64),
    no_hp VARCHAR(16)
);

CREATE TABLE pemilik(
    id_pemilik SERIAL PRIMARY KEY,
    id_rekening SERIAL, 
    nama_awal VARCHAR(32),
    nama_akhir VARCHAR(32),
    email VARCHAR(64), 
    password VARCHAR(64),
    no_hp VARCHAR(16),

    CONSTRAINT fk_rekening
        FOREIGN KEY (id_rekening)
            REFERENCES rekening(id_rekening)
	ON DELETE CASCADE

);

CREATE TABLE kota(
    id_kota SERIAL PRIMARY KEY, 
    nama_kota VARCHAR(64),
    provinsi VARCHAR(64)
);

CREATE TABLE kost(
    id_kost SERIAL PRIMARY KEY, 
    id_pemilik SERIAL, 
    id_kota SERIAL,
    nama_kost VARCHAR(64), 
    alamat_kost VARCHAR(256), 
    harga INT, 
    jenis_kost VARCHAR(32),
    deskripsi VARCHAR(512),

    CONSTRAINT fk_pemilik 
        FOREIGN KEY(id_pemilik)
            REFERENCES pemilik(id_pemilik)
    ON DELETE CASCADE,

    CONSTRAINT fk_kota 
        FOREIGN KEY(id_kota)
            REFERENCES kota(id_kota)
);



CREATE TABLE pembayaran(
    id_pembayaran SERIAL PRIMARY KEY, 
    id_rekening SERIAL,
    tanggal_trf date,
    total_pembayaran INT, 
    status VARCHAR(32),

    CONSTRAINT fk_rekening2
        FOREIGN KEY (id_rekening)
            REFERENCES rekening(id_rekening)
);

CREATE TABLE sewa(
    id_sewa SERIAL PRIMARY KEY, 
    id_kost SERIAL,
    id_penyewa SERIAL, 
    id_pembayaran SERIAL,
    tanggal_sewa DATE,
    status VARCHAR(32), 

    CONSTRAINT fk_kost
        FOREIGN KEY(id_kost)
            REFERENCES kost(id_kost),

    CONSTRAINT fk_penyewa
        FOREIGN KEY(id_penyewa)
            REFERENCES penyewa(id_penyewa),

    CONSTRAINT fk_pembayaran
        FOREIGN KEY(id_pembayaran)
            REFERENCES pembayaran(id_pembayaran)
);
