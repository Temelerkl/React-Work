import { useEffect, useState } from "react";

function App() {
  // Form elemanları için kullanılacak seçeneklerin tanımlanması
  const levels = [
    { key: "beginner", value: "Başlangiç" },
    { key: "jr_developer", value: "Jr.Developer" },
    { key: "sr_developer", value: "Sr.Developer" },
  ];

  // Input, textarea, select, checkbox ve diğer form elemanları için state'lerin tanımlanması
  const [name, setName] = useState("Temel input"); // İsim inputu değeri ve güncelleyici fonksiyonu
  const [description, setDescription] = useState("Temel textarea"); // Açıklama textarea değeri ve güncelleyici fonksiyonu
  const [gender, setGender] = useState("0"); // Cinsiyet seçimi select değeri ve güncelleyici fonksiyonu
  const [rule, setRule] = useState(true); // Kuralları kabul checkbox değeri ve güncelleyici fonksiyonu
  const [rules, setRules] = useState([
    // Kurallar checkbox listesi değeri ve güncelleyici fonksiyonu
    { key: 1, value: "1. kurali kabul ediyorum", checked: false },
    { key: 2, value: "2. kurali kabul ediyorum", checked: false },
    { key: 3, value: "3. kurali kabul ediyorum", checked: true },
  ]);

  const [level, setLevel] = useState("jr_developer"); // Seviye seçimi radio buttons değeri ve güncelleyici fonksiyonu
  const [avatar, setAvatar] = useState(false); // Avatar yükleme input değeri ve güncelleyici fonksiyonu
  const [image, setImage] = useState(false); // Yüklü avatarın görüntülenmesi için resim değeri

  // Avatar yüklendikten sonra resmi göstermek için useEffect kullanımı
  useEffect(() => {
    if (avatar) {
      const fileReader = new FileReader();
      fileReader.addEventListener("load", function () {
        setImage(this.result);
      });
      fileReader.readAsDataURL(avatar);
    }
  }, [avatar]);

  // Kuralların işaretlenmesini kontrol etmek için fonksiyon
  const checkRule = (key, checked) => {
    setRules((rules) =>
      rules.map((rule) => {
        if (key === rule.key) {
          rule.checked = checked;
        }
        return rule;
      })
    );
  };

  // Formun gönderilmesi için işlemler
  const submitHandle = () => {
    const formData = new FormData();
    formData.append("avatar", avatar);
    formData.append("name", name);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: formData,
    });
  };

  // Gönder butonunun durumunu belirlemek için değişken
  const enabled = rules.every((rule) => rule.checked) && avatar;

  return (
    <>
      {/* Ad değiştirme butonu */}
      <button onClick={() => setName("ahmet")}>Adi değiştir</button>

      {/* İsim inputu */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      {/* Açıklama textarea */}
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />

      {/* Cinsiyet seçimi select */}
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value={"0"}>Seçiniz</option>
        <option value={"1"}>Erkek</option>
        <option value={"2"}>Kadin</option>
      </select>
      <br />

      {/* Kuralları kabul checkbox */}
      <label>
        <input
          type="checkbox"
          checked={rule}
          onChange={(e) => setRule(e.target.checked)}
        />
        Kurallari Kabul Ediyorum
      </label>
      <br />

      {/* Kurallar checkbox listesi */}
      {rules.map((rule) => (
        <label key={rule.key}>
          <input
            type="checkbox"
            checked={rule.checked}
            onChange={(e) => checkRule(rule.key, e.target.checked)}
          />
          {rule.value}
        </label>
      ))}
      <br />

      {/* Seviye seçimi radio buttons */}
      {levels.map((l, index) => (
        <label key={index}>
          <input
            type="radio"
            value={l.key}
            checked={l.key === level}
            onChange={(e) => setLevel(e.target.value)}
          />
          {l.value}
        </label>
      ))}
      <br />

      {/* Seçilen seviye gösterimi */}
      {level}
      <br />
      <br />

      {/* Avatar yükleme */}
      <label>
        <input type="file" onChange={(e) => setAvatar(e.target.files[0])} />
      </label>
      <br />
      <br />

      {/* Avatar ve resim görüntüleme */}
      {avatar && (
        <>
          <h3>{avatar.name}</h3>
          {image && <img src={image} alt="Avatar" />}
        </>
      )}

      {/* Form gönderme butonu */}
      <button onClick={submitHandle} disabled={!enabled}>
        Devam Et
      </button>
    </>
  );
}

export default App;
