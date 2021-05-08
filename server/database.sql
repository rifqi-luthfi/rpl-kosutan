CREATE TABLE promo(
    id_promo INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    gambar VARCHAR(128),
    poster VARCHAR(128)
);

CREATE TABLE bank(
    id_bank INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nama_bank VARCHAR(64)
);

CREATE TABLE rekening(
    id_rekening INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    id_bank INT, 
    no_rek VARCHAR(64),

    CONSTRAINT fk_bank
        FOREIGN KEY (id_bank)
            REFERENCES bank(id_bank)
);

CREATE TABLE admin(
    id_admin INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    email VARCHAR(64), 
    password VARCHAR(64)

);

CREATE TABLE penyewa(
    id_penyewa INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nama_awal VARCHAR(32),
    nama_akhir VARCHAR(32),
    email VARCHAR(64), 
    password VARCHAR(64),
    no_hp VARCHAR(16)
);

CREATE TABLE pemilik(
    id_pemilik INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_rekening INT, 
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
    id_kota INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    nama_kota VARCHAR(64),
    provinsi VARCHAR(64)
);

CREATE TABLE kost(
    id_kost INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    id_pemilik INT, 
    id_kota INT,
    nama_kost VARCHAR(64), 
    alamat_kost VARCHAR(256), 
    harga INT, 
    jenis_kost VARCHAR(32),
    deskripsi VARCHAR(512),
    img VARCHAR(256),

    CONSTRAINT fk_pemilik 
        FOREIGN KEY(id_pemilik)
            REFERENCES pemilik(id_pemilik)
    ON DELETE CASCADE,

    CONSTRAINT fk_kota 
        FOREIGN KEY(id_kota)
            REFERENCES kota(id_kota)
);



CREATE TABLE pembayaran(
    id_pembayaran INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    id_rekening SERIAL,
    tanggal_trf date,
    total_pembayaran INT, 
    status VARCHAR(32),

    CONSTRAINT fk_rekening2
        FOREIGN KEY (id_rekening)
            REFERENCES rekening(id_rekening)
);

CREATE TABLE sewa(
    id_sewa INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    id_kost INT,
    id_penyewa INT, 
    id_pembayaran INT,
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
