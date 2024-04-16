
const SeedDB = {
  user: {
    email: "admin@invitation.com",
    username: "admin",
    password: "$2b$10$VhmfGtzS9/IZPQuLQhmXkeTZmXrHYjIV2HCRfsOEp66Yk/OJiwow2", //123qwe
    password_confirm: "$2b$10$VhmfGtzS9/IZPQuLQhmXkeTZmXrHYjIV2HCRfsOEp66Yk/OJiwow2",
    role: "admin"
  },
  dataConfig: {
    male: {
      name: "Nguyễn Linh",
      parent: {
        mother: "Phan Thị Hương"
      },
      location: {
        text: "Công Chính - Nông Cống - Thanh Hóa",
        map: "https://maps.app.goo.gl/auNpEvSVSssubFMS8"
      },
      time_start: {
        date: {
          lunar: {
            day: "23",
            month: "03",
            year: "2024"
          },
          day_of_week: "4",
          solar: {
            day: "01",
            month: "05",
            year: "2024"
          }
        },
        time: {
          hour: "16",
          minute: "00"
        }
      },
      finances: [{
        provider_name: "Vietinbank",
        provider_number: "100002539598",
        holder_name: "NGUYEN VAN LINH", 
        male_bank: '/assets/images/male_bank.jpg',
      }],
      email: "nguyenlinhbkhnk60@gmail.com",
      phone: "0967095596",
      bg: '/assets/images/bg.jpg',
      bg_fb: '/assets/images/bg-fb.jpg'
    },
    female: {
      name: "Lê Thủy",
      parent: {
        mother: "Vũ Thị Loan"
      },
      location: {
        text: "55 Trần Hòa - Định Công - Hoàng Mai - Hà Nội",
        map: "https://maps.app.goo.gl/6TtVidZFWeAEvb2s6"
      },
      time_start: {
        date: {
          lunar: {
            day: "23",
            month: "03",
            year: "2024"
          },
          day_of_week: "4",
          solar: {
            day: "01",
            month: "05",
            year: "2024"
          }
        },
        time: {
          hour: "10",
          minute: "00"
        }
      },
      finances: [{
        provider_name: "PVcomBank",
        provider_number: "10700093769",
        holder_name: "LE THI THUY", 
        female_bank: '/assets/images/female_bank.jpg',
      }],
      email: "thuyle@gmail.com",
      phone: "0352556976",
      bg: '/assets/images/bg.jpg',
      bg_fb: '/assets/images/bg-fb.jpg'
    },
    default: true
  }
};

module.exports = SeedDB;
