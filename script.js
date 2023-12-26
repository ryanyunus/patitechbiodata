function hitung() {
  // Mengambil nilai input dari elemen dengan ID "namaBarang"
  var namaBarang = document.getElementById("namaBarang").value;

  // Mengambil nilai input dari elemen dengan ID "jumlah" dan mengonversinya ke tipe data integer
  var jumlah = parseInt(document.getElementById("jumlah").value);

  // Mengambil nilai input dari elemen dengan ID "harga" dan mengonversinya ke tipe data float
  var harga = parseFloat(document.getElementById("harga").value);

  // Menghitung total harga dengan mengalikan jumlah dengan harga
  var total = jumlah * harga;

  // Mendapatkan elemen dengan ID "hasilList"
  var hasilJumlah = document.getElementById("hasilList");

  // Membuat elemen <li> baru
  var list = document.createElement("li");

  // Menambahkan kelas "list-group-item" ke elemen <li>
  list.className = "list-group-item";

  // Membuat teks yang berisi informasi jumlah barang
  var jumlahText = document.createTextNode(
    "Jumlah " + namaBarang + ": " + jumlah
  );

  // Menambahkan teks jumlah ke elemen <li>
  list.appendChild(jumlahText);

  // Menambahkan elemen <li> ke elemen dengan ID "hasilList"
  hasilJumlah.appendChild(list);

  // Membuat elemen <li> baru untuk menampilkan total harga
  var listTotal = document.createElement("li");

  // Menambahkan kelas "list-group-item" ke elemen <li> total
  listTotal.className = "list-group-item";

  // Membuat teks yang berisi informasi total harga barang
  var totalText = document.createTextNode(
    "Total Harga " + namaBarang + ": " + total
  );

  // Menambahkan teks total harga ke elemen <li> total
  listTotal.appendChild(totalText);

  // Menambahkan elemen <li> total ke elemen dengan ID "hasilList"
  hasilJumlah.appendChild(listTotal);
}

function resetForm() {
  // Menghapus nilai input pada elemen dengan ID "namaBarang"
  document.getElementById("namaBarang").value = "";

  // Menghapus nilai input pada elemen dengan ID "jumlah"
  document.getElementById("jumlah").value = "";

  // Menghapus nilai input pada elemen dengan ID "harga"
  document.getElementById("harga").value = "";

  // Menghapus konten dari elemen dengan ID "hasilList"
  document.getElementById("hasilList").innerHTML = "";
}
