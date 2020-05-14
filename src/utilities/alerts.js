import Swal from "sweetalert2";

export const closeSwal = () => (Swal.close());

export const loadingAlert = (title, text, timer = 500000) => {
  return Swal.fire({
    animation: false,
    customClass: "animation fadeIn bg-white",
    allowOutsideClick: false,
    timer: timer,
    title,
    text,
    showConfirmButton: false,
    allowEscapeKey: false,
    onOpen: () => Swal.showLoading()
  });
};

export const errorAlert = (title, text) => {
  return Swal.fire({
    icon: "error",
    title: title,
    text: text
  }).then(() => true);
};

export const infoAlert = (title, text) => {
  return Swal.fire({
    icon: "info",
    title: title,
    text: text
  }).then(() => true);
};

export const successAlert = (title, text) => {
  return Swal.fire({
    icon: "success",
    title: title,
    text: text
  }).then(() => true);
};

export async function choiceAlert(title, text, yesTextButton = "Sim", noTextButton = "Não") {
  return Swal.fire({
    title: title,
    text: text,
    icon: "question",
    showCancelButton: true,
    confirmButtonText: yesTextButton,
    confirmButtonColor: "#3085d6",
    cancelButtonText: noTextButton,
    cancelButtonColor: "#d33"
  }).then((result) => {
    if (result.value) {
      return true;
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      return false;
    }
  });
}
