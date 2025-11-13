
export type locationVerificationType = {

  location: {

    /**
     * Must be set to CIRCLE
     */
    type: "CIRCLE";

    /**
     * Expected accuracy for the verification in meters
     */
    radio: number;

    /**
     * Center of the location
     */
    center: {

      /**
       * Latitude (degrees)
       */
      latitude: number;

      /**
       * Longitude (degrees)
       */
      longitude: number;

    };

  };

};


