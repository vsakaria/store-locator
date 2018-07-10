import delay from "./delay";

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const stores = {
  result_count: 5,
  area: "EC1N 2HT",
  listing: [
    {
      id: 1,
      store_code: "4036",
      open_status: "Open",
      store_type: "local",
      store_distance: "0.02369926238899276",
      store_name: "Fetter Lane Local",
      contact: {
        address1: "60 Fetter Lane",
        address2: "",
        city: "London",
        county: "",
        manager: "Sarfraz Rana",
        post_code: "EC4A 1AA",
        telephone: "020 7583 4274"
      },
      opening_times: {
        monday: {
          start_time: "06:00",
          end_time: "23:00"
        },
        tuesday: {
          start_time: "06:00",
          end_time: "23:00"
        },
        wednesday: {
          start_time: "06:00",
          end_time: "23:00"
        },
        thursday: {
          start_time: "06:00",
          end_time: "23:00"
        },
        friday: {
          start_time: "06:00",
          end_time: "23:00"
        },
        saturday: {
          start_time: "07:00",
          end_time: "23:00"
        },
        sunday: {
          start_time: "09:00",
          end_time: "23:00"
        }
      }
    },
    {
      id: 2,
      store_code: "6123",
      open_status: "Open",
      store_type: "local",
      store_distance: "0.03782417432444655",
      store_name: "Holborn Circus Local",
      contact: {
        address1: "123 Holborn",
        address2: "",
        city: "London",
        county: "",
        manager: "Sarfraz Rana",
        post_code: "EC1N 2TD",
        telephone: "020 7441 1230"
      },
      opening_times: {
        monday: {
          start_time: "07:00",
          end_time: "21:00"
        },
        tuesday: {
          start_time: "07:00",
          end_time: "21:00"
        },
        wednesday: {
          start_time: "07:00",
          end_time: "21:00"
        },
        thursday: {
          start_time: "07:00",
          end_time: "21:00"
        },
        friday: {
          start_time: "07:00",
          end_time: "21:00"
        },
        saturday: {
          start_time: "08:00",
          end_time: "18:00"
        },
        sunday: {
          start_time: "08:00",
          end_time: "17:00"
        }
      }
    },
    {
      id: 3,
      store_code: "4104",
      open_status: "Open",
      store_type: "local",
      store_distance: "0.16378789455535897",
      store_name: "Farringdon Local",
      contact: {
        address1: "17-23 Farringdon Road",
        address2: "",
        city: "London",
        county: "",
        manager: "Tom Careless",
        post_code: "EC1M 3HA",
        telephone: "020 7430 0213"
      },
      opening_times: {
        monday: {
          start_time: "06:00",
          end_time: "23:00"
        },
        tuesday: {
          start_time: "06:00",
          end_time: "23:00"
        },
        wednesday: {
          start_time: "06:00",
          end_time: "23:00"
        },
        thursday: {
          start_time: "06:00",
          end_time: "23:00"
        },
        friday: {
          start_time: "06:00",
          end_time: "23:00"
        },
        saturday: {
          start_time: "07:00",
          end_time: "23:00"
        },
        sunday: {
          start_time: "08:00",
          end_time: "22:00"
        }
      }
    },
    {
      id: 4,
      store_code: "4201",
      open_status: "Open",
      store_type: "local",
      store_distance: "0.24778180996332955",
      store_name: "The City Fleet Street Local",
      contact: {
        address1: "77 Fleet Street",
        address2: "",
        city: "London",
        county: "",
        manager: "Donna Emerton",
        post_code: "EC4Y 1HY",
        telephone: "020 7441 1330"
      },
      opening_times: {
        monday: {
          start_time: "07:00",
          end_time: "23:00"
        },
        tuesday: {
          start_time: "07:00",
          end_time: "23:00"
        },
        wednesday: {
          start_time: "07:00",
          end_time: "23:00"
        },
        thursday: {
          start_time: "07:00",
          end_time: "23:00"
        },
        friday: {
          start_time: "07:00",
          end_time: "23:00"
        },
        saturday: {
          start_time: "08:00",
          end_time: "18:00"
        },
        sunday: {
          start_time: "08:00",
          end_time: "18:00"
        }
      }
    },
    {
      id: 5,
      store_code: "4046",
      open_status: "Open",
      store_type: "local",
      store_distance: "0.3241611703392148",
      store_name: "Mid City Place Local",
      contact: {
        address1: "71 High Holborn",
        address2: "",
        city: "London",
        county: "",
        manager: "Lawrence Monk",
        post_code: "WC1V 6EA",
        telephone: "020 7404 9406"
      },
      opening_times: {
        monday: {
          start_time: "07:00",
          end_time: "23:00"
        },
        tuesday: {
          start_time: "07:00",
          end_time: "23:00"
        },
        wednesday: {
          start_time: "07:00",
          end_time: "23:00"
        },
        thursday: {
          start_time: "07:00",
          end_time: "23:00"
        },
        friday: {
          start_time: "08:00",
          end_time: "23:00"
        },
        saturday: {
          start_time: "10:00",
          end_time: "16:00"
        },
        sunday: {
          start_time: "10:00",
          end_time: "16:00"
        }
      }
    }
  ]
};

class StoreApi {
  static getAllStores() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], stores));
      }, delay);
    });
  }
  static getStoresByPostCode(postcode) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const results = stores.area === postcode ? stores : null;
        resolve(Object.assign([], results));
      }, delay);
    });
  }
}

export default StoreApi;
