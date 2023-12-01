// class JukshioKYCModule {
//
//   constructor(config, callBack) {
//     this.loader = document.getElementById("loader");
//     this.statusDisplay = document.getElementById("status");
//     this.statusDisplay.innerHTML = "KYC Pending!";
//     this.baseURl = "https://localhost:3000/v2";
//     this.sessionId = new Date().getTime();
//
//   }
//
//   createUI() {
//     let container = document.createElement('div');
//     container.id = 'jukshio-container';
//     container.style.width = '100%';
//     container.style.height = '100vh';
//     container.style.position = 'absolute';
//     container.style.top = '0';
//     container.style.left = '0';
//     container.style.backgroundColor = "rgba(0,0, 0, 0.5)";
//
//     let content = document.createElement('div');
//     content.id = 'jukshio-content';
//     content.style.width = '40%';
//     content.style.height = '80%';
//     content.style.marginTop = '10%';
//     content.style.marginLeft = 'auto';
//     content.style.marginRight = 'auto';
//     content.style.padding = '5%';
//     content.style.backgroundColor = '#FFFFFF';
//     content.style.boxShadow = '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);';
//
//     container.appendChild(content);
//
//     let logo = document.createElement('img');
//     logo.id = 'jukshio-logo';
//     logo.src = 'https://online.manappuram.com/img/manappuram.png';
//     logo.style.width = '50%';
//     logo.style.height = 'auto';
//     logo.style.display = 'block';
//     logo.style.margin = '20px auto';
//     logo.alt = 'logo';
//
//     content.appendChild(logo)
//
//     let header = document.createElement('h2');
//     header.style.textAlign = 'center';
//     header.innerText = 'Complete your verification in a mobile browser';
//
//     content.appendChild(header);
//
//     let advisoryText = document.createElement('p');
//     header.style.textAlign = 'center';
//     header.style.color = '#ff0000';
//     header.innerText = 'Scan the QR code using mobile camera';
//
//     content.appendChild(advisoryText);
//
//     let qrCode = document.createElement('div');
//     qrCode.id = 'qrcode';
//
//     content.appendChild(qrCode);
//
//
//
//     let body = document.getElementsByTagName('body')[0];
//     body.appendChild(container);
//   }
//
//   generateSession() {
//
//     this.createUI();
//
//     const qrConfig = {
//       text: "http://localhost:4200?session_id=" + this.sessionId,
//       width: 300,
//       height: 300,
//       colorDark: "#000000",
//       colorLight: "#ffffff",
//       correctLevel: QRCode.CorrectLevel.H,
//     };
//
//     // Generate QR Code
//     new QRCode(document.getElementById("qrcode"), qrConfig);
//
//     this.createSession();
//
//   }
//
//   async createSession() {
//     try {
//       const body = new FormData();
//       body.append("session_id", this.sessionId.toString());
//       body.append("app_id", "mannapuram");
//       const res = fetch(this.baseURl + "/create_session", {
//         method: "POST",
//         body: body,
//       });
//
//       const resData = await res.json();
//
//       console.log(resData);
//
//       this.checkKYCStatus();
//     } catch (err) {
//       console.log(err.message);
//     }
//   }
//
//   private async checkKYCStatus() {
//     try {
//       const body = new FormData();
//       body.append("session_id", this.sessionId.toString());
//       body.append("app_id", "mannapuram");
//       const res = await fetch(this.baseURl + "/check_session_status", {
//         method: "POST",
//         body: body,
//       });
//
//       const resData = await res.json();
//
//       console.log(resData);
//
//       if (resData.session_status === "yet_to_start") {
//         this.hideLoaderAndShowMessage("KYC not yet started!");
//       }
//
//       if (resData.session_status === "in_progress") {
//         this.showLoaderAndShowMessage("KYC in progress please wait!");
//       }
//
//       if (resData.session_status === "completed") {
//         this.hideLoaderAndShowMessage("KYC completed!");
//         clearInterval(this.statusInterval);
//       }
//     } catch (err) {
//       console.log(err.message);
//     }
//   }
//
//   private showLoaderAndShowMessage(message: string) {
//     this.loader?.style.display = "block";
//     this.statusDisplay?.innerHTML = message;
//   }
//
//   private hideLoaderAndShowMessage(message: string) {
//     this.loader?.style.display = "none";
//     this.statusDisplay?.innerHTML = message;
//   }
// }
//
//
async function createUI() {
  let container = document.createElement('div');
  container.id = 'jukshio-container';
  container.style.width = '100%';
  container.style.height = '100vh';
  container.style.position = 'absolute';
  container.style.top = '0';
  container.style.left = '0';
  container.style.backgroundColor = "rgba(0,0,0,0.8)";
  container.style.backdropFilter = "saturate(180%) blur(10px)";

  let content = document.createElement('div');
  content.id = 'jukshio-content';
  content.style.width = '30%';
  content.style.height = '85%';
  content.style.marginTop = '5%';
  content.style.marginLeft = 'auto';
  content.style.marginRight = 'auto';
  content.style.padding = '2%';
  content.style.position = 'relative';
  content.style.backgroundColor = '#FFFFFF';
  content.style.boxShadow = '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);';

  container.appendChild(content);

  let logo = document.createElement('img');
  logo.id = 'jukshio-logo';
  logo.src = 'https://online.manappuram.com/img/manappuram.png';
  logo.style.width = '50%';
  logo.style.height = 'auto';
  logo.style.display = 'block';
  logo.style.margin = '20px auto';
  logo.alt = 'logo';

  content.appendChild(logo)

  let header = document.createElement('h4');
  header.style.textAlign = 'center';
  header.style.marginBottom = '40px';
  header.innerText = 'Complete your verification in a mobile browser';

  content.appendChild(header);

  let advisoryText = document.createElement('p');
  advisoryText.style.textAlign = 'center';
  advisoryText.style.color = '#ff0000';
  advisoryText.innerText = 'Scan the QR code using mobile camera';

  content.appendChild(advisoryText);

  let qrCode = document.createElement('div');
  qrCode.id = 'qrcode';
  qrCode.style.display = 'flex';
  qrCode.style.justifyContent = 'center';

  content.appendChild(qrCode);

  let poweredBy = document.createElement('p');
  poweredBy.style.position = 'absolute';
  poweredBy.style.bottom = '15px';
  poweredBy.style.left = '0';
  poweredBy.style.right = '0';
  poweredBy.style.width = '100%';
  poweredBy.style.textAlign = 'center';
  poweredBy.style.marginLeft = 'auto';
  poweredBy.style.marginRight = 'auto';
  poweredBy.innerText = 'powered by Jukshio';

  content.appendChild(poweredBy);

  let body = document.getElementsByTagName('body')[0];
  body.appendChild(container);

  return {
    status: 'created UI'
  }

}

async function launchJukshioKYC() {

  let status = await createUI();

  const qrConfig = {
    text: "http://localhost:4200?session_id=" + this.sessionId,
    width: 300,
    height: 300,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  };

  // Generate QR Code
  new QRCode(document.getElementById("qrcode"), qrConfig);
  
}
