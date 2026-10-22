// Auto-generated from gear.json — ES module
// Source key: Physical Domain

const data = {
  "name": "Physical Domain",
  "description": "Physical Domain contains all of the devices, locations, and connectivity in the system.",
  "orientation": "right",
  "position": {
    "row": 3,
    "col": 1
  },
  "color": "#708090",
  "assets": {
    "GEAR1": {
      "name": "GEAR Architecture document",
      "url": "https://www.intel.com/content/www/us/en/content-details/790385/government-conceptual-enterprise-architecture-gear.html?wapkw=Government%20Enterprise%20Architecture",
      "description": "Overview of the GEAR architecture and its uses."
    },
    "GEAR2": {
      "name": "GEAR Security Architecture document",
      "url": "https://www.intel.com/content/www/us/en/content-details/790385/government-conceptual-enterprise-architecture-gear.html?wapkw=Government%20Enterprise%20Architecture",
      "description": "The Security Aspect of the Government Enterprise Architecture Reference (GEAR) Logical View integrates protection mechanisms such as encryption, intrusion detection, and threat mitigation across all layers of the architecture. It ensures that all parts of the enterprise are safeguarded against evolving threats by embedding security measures into the Organizational, Process, and Physical Layers. This approach enables a resilient, policy driven environment capable of addressing diverse threats across every architecture layer"
    },
    "GEARVideo": {
      "name": "Video: Government Enterprise Architecture Basics: A Simple Explanation",
      "url": "https://www.youtube.com/watch?v=Ou9FHodTamk",
      "description": "In this episode, we delve into the world of leveraging enterprise architecture in government settings, specifically focusing on the benefits and strategies involved. From understanding the fundamentals of enterprise architecture frameworks to embracing digital transformation, we explore how organizations can drive value and efficiency through proper architectural planning. Join us as we discuss the significance of architecture in government operations and the role it plays in achieving organizational goals. If you are interested in learning more about enterprise architecture and its impact on government entities, this insightful discussion is for you."
    }
  },
  "layers": {
    "Machines": {
      "name": "Machines",
      "description": "Machines include non digital and digital machines that interact with the physical world.",
      "position": {
        "row": 1,
        "col": 1,
        "rowspan": 2
      },
      "layers": {
        "Manual Input Devices": {
          "name": "Manual Input Machines",
          "description": "Machines operated by humans to provide direct input to the system.\n\nPush buttons\n\nSelector switches\n\nFoot pedals\n\nEmergency stop switches\n\nHandwheels and levers with feedback",
          "position": {
            "row": 1,
            "col": 1,
            "colspan": 3
          }
        },
        "Sensors": {
          "name": "Sensors",
          "description": "Machines that measure physical parameters from the process. Temperature sensors (RTDs, thermocouples)\n\nPressure transducers\n\nFlow meters\n\nLevel sensors (ultrasonic, float)\n\nProximity and position sensors (inductive, optical)\n\nSpeed/rotation sensors (encoders, tachometers)\n\nChemical/gas sensors (pH, CO₂, VOCs)",
          "position": {
            "row": 1,
            "col": 4,
            "colspan": 3
          }
        },
        "Composite Machines": {
          "name": "Composite Machines",
          "description": "Assemblies that combine sensors, actuators, controllers, and logic into an integrated device.\n\nRobotic arms (with encoders, motors, force sensors)\n\nCNC machines\n\nAutonomous guided vehicles (AGVs)\n\nSmart conveyor modules\n\nPackaging machines with embedded control\n\nPick-and-place machines",
          "position": {
            "row": 2,
            "col": 1,
            "colspan": 6
          }
        },
        "Motion Acuators": {
          "name": "Motion Acuators",
          "description": "Machines that cause linear or rotary movement in mechanical systems.\n\nElectric motors (AC, DC, servo, stepper)\n\nPneumatic or hydraulic cylinders\n\nLinear actuators\n\nRotary actuators\n\nDrives and motor controllers",
          "position": {
            "row": 3,
            "col": 1,
            "colspan": 2
          }
        },
        "Flow Acuators": {
          "name": "Flow Acuators",
          "description": "Machines that regulate flow of liquids, gases, or materials in the process.\n\nSolenoid valves\n\nControl valves (pneumatic, electric)\n\nDosing pumps\n\nDampers and gates\n\nHeaters (used to control thermal flow)",
          "position": {
            "row": 3,
            "col": 3,
            "colspan": 2
          }
        },
        "Signal and Power Switching": {
          "name": "Signal and Power Switching",
          "description": "Machines that switch electrical signals or power to machines.\n\nRelays\n\nContactors\n\nSolid-state switches\n\nCircuit breakers (with signaling)\n\nInterposing relays",
          "position": {
            "row": 3,
            "col": 5,
            "colspan": 2
          }
        }
      }
    },
    "Devices": {
      "name": "Devices",
      "description": "Devices represent all physical devices involved in the system's operation, such as sensors and hardware endpoints.",
      "position": {
        "row": 1,
        "col": 2
      },
      "layers": {
        "Dynamic Edge Devices": {
          "name": "Dynamic Edge Devices",
          "description": "Dynamic Edge Devices are adaptive, location-dependent devices connecting users to systems.",
          "position": {
            "row": 1,
            "col": 1
          }
        },
        "Operations Devices": {
          "name": "Operations Devices",
          "description": "Devices used for operational workflows, ensuring smooth day-to-day system functioning.",
          "position": {
            "row": 1,
            "col": 2
          }
        },
        "Enterprise Devices": {
          "name": "Enterprise Devices",
          "description": "Enterprise-level devices supporting organizational goals, such as servers and high-performance hardware.",
          "position": {
            "row": 1,
            "col": 3
          }
        },
        "Multi-Hybrid Cloud": {
          "name": "Multi-Hybrid Cloud",
          "description": "Multi-Hybrid Cloud systems represent cloud environments supporting connectivity and scaling across devices.",
          "position": {
            "row": 1,
            "col": 4
          }
        }
      }
    },
    "Communications": {
      "name": "Communications",
      "description": "Communication represents the physical network and protocols connecting devices within locations.",
      "position": {
        "row": 2,
        "col": 2
      }
    },
    "Locations": {
        "name": "Locations",
      "description": "Locations define geographic and logical places in the system where resources are located.",
      "position": {
        "row": 3,
        "col": 1,
        "colspan": 2
      },
      "layers": {
        "Dynamic Locations": {
            "name": "Dynamic Locations",
          "description": "Dynamic Locations are movable and adaptive spaces, such as temporary work areas or mobile units.",
          "position": {
            "row": 1,
            "col": 1
          }
        },
        "Operations Locations": {
            "name": "Operations Locations",
          "description": "Locations used for managing and monitoring operational tasks in the system.",
          "position": {
            "row": 1,
            "col": 2
          }
        },
        "Hybrid Offices": {
            "name": "Hybrid Offices",
          "description": "Merged work and home environments supporting hybrid work practices.",
          "position": {
            "row": 1,
            "col": 3
          }
        },
        "Datacenters": {
            "name": "Datacenters",
          "description": "Dedicated locations that store and manage system-critical data and applications.",
          "position": {
            "row": 1,
            "col": 4
          }
        },
        "Outsourced Locations": {
            "name": "Outsourced Locations",
          "description": "Third-party-managed spaces where some system operations are handled.",
          "position": {
            "row": 1,
            "col": 5
          }
        }
      }
    }
  }
};

export default data;
