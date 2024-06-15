import classNames from "classnames"; //npm i classnames yazarak terminale bir paket indirdim bu paket sayesinde variant durumlarına göre butonlar farklı işlveler yapabiliyor(renklerinin farklı olması gibi).
//Şimdi butona yazılıcak yazıyı belirlemek için bir PROP atamak ve yazıyı onun içine yazmak gerekiyor.PROP dediğim şey ise key value gibi değerler.
function Button({ text, variant = "default" }) {
  return (
    <button
      className={classNames({
        "p-4 h-10 flex items-center rounded": true, //Bu satırdaki kod tüm butonların bu css kodlarını içermesi gerektiğini gösteriyor.
        "bg-gray-100 text-black": variant === "default", //Bu satırdaki kodda ise eğer variant değeri default ise yani variant değerine sahip değilse hemen solundaki css kodlarını taşıması gerektiği yazıyor.
        "bg-green-600 text-white": variant === "success", //Bu satırdaki kodda variant değeri success ise solundaki css değerlerini taşıması yazıyor.
        "bg-red-600 text-white": variant === "danger", //Bu satırdaki kodda variant değeri danger ise solundaki css değerlerini taşıması yazıyor.
        "bg-yellow-300 text-yellow-800": variant === "warning", //Bu satırdaki kodda variant değeri warning ise solundaki css değerlerini taşıması yazıyor.
      })}
    >
      {text}
    </button> //Bu butonun içindeki süslü parantez içerisindeki text ise butonların içinde yazan yazıyı temsil ediyor.
  );
}

export default Button; //Button adlı bir fonksiyonu dışa aktarmaya yarıyor bu kod satırı.Dışa aktarılan bu kod satırını Şu şekilde içe aktarabilirim:
//import Button from './dosyaYolu/Button';
