// Auto-generated from gear.json — ES module
// Source key: Digital Domain

const data = {
  "name": "Digital Domain",
  "description": "Software stack of the system, including the middleware, software and applications.",
  "orientation": "front",
  "color": "#6a0dad",
  "position": {
    "row": 3,
    "col": 2
  },
  "assets": {
    "GEAR4": {
      "name": "GEAR Architecture document",
      "url": "https://www.intel.com/content/www/us/en/content-details/790385/government-conceptual-enterprise-architecture-gear.html?wapkw=Government%20Enterprise%20Architecture",
      "description": "Overview of the GEAR architecture and its uses."
    },
    "GEARVideo": {
      "name": "Video: Government Enterprise Architecture Basics: A Simple Explanation",
      "url": "https://www.youtube.com/watch?v=Ou9FHodTamk",
      "description": "In this episode, we delve into the world of leveraging enterprise architecture in government settings, specifically focusing on the benefits and strategies involved. From understanding the fundamentals of enterprise architecture frameworks to embracing digital transformation, we explore how organizations can drive value and efficiency through proper architectural planning. Join us as we discuss the significance of architecture in government operations and the role it plays in achieving organizational goals. If you are interested in learning more about enterprise architecture and its impact on government entities, this insightful discussion is for you."
    }
  },
  "layers": {
    "Application Layer": {
        "name": "Application Layer",
      "description": "Handles user-facing applications, ensuring interaction between system and users.",
      "position": {
        "row": 1,
        "col": 2,
        "colspan": 2
      },
      "layers": {
        "Analytics Services": {
            "name": "Analytics Services",
          "position": {
            "row": 1,
            "col": 1
          }
        },
        "AI ML Services": {
            "name": "AI ML Services",
          "position": {
            "row": 1,
            "col": 2
          }
        },
        "Workflow Services": {
            "name": "Workflow Services",
          "position": {
            "row": 1,
            "col": 3
          }
        },
        "Developer Services": {
            "name": "Developer Services",
          "position": {
            "row": 2,
            "col": 1,
            "colspan": 3
          }
        }
      }
    },
    "Distributed Information Management Layer": {
      "description": "Oversees the efficient distribution and access of system data across modules.",
        "name": "Distributed Information Management Layer",
      "position": {
        "row": 2,
        "col": 2,
        "colspan": 1
      },
      "layers": {
        "Data Definition Framework": {
            "name": "Data Definition Framework",
          "position": {
            "row": 1,
            "col": 1,
            "rowspan": 2
          }
        },
        "Data Management Layer": {
            "name": "Data Management Layer",
          "position": {
            "row": 1,
            "col": 2
          }
        },
        "Common Data Services": {
            "name": "Common Data Services",
          "position": {
            "row": 2,
            "col": 2
          }
        }
      }
    },
    "Service Management Layer": {
        "name": "Service Management Layer",
      "description": "Monitors and controls services for smooth operation and functionality.",
      "position": {
        "row": 2,
        "col": 3
      },
      "layers": {
        "Service Repository": {
            "name": "Service Repository",
          "position": {
            "row": 2,
            "col": 1
          }
        },
        "Environment Manager": {
            "name": "Environment Manager",
          "position": {
            "row": 1,
            "col": 2
          }
        },
        "Service Orchestration": {
            "name": "Service Orchestration",
          "position": {
            "row": 1,
            "col": 3
          }
        },
        "Common Data Services": {
            "name": "Common Data Services",
          "position": {
            "row": 2,
            "col": 2,
            "colspan": 2
          }
        }
      }
    },
    "Software Defined Infrastructure": {
      "description": "Focuses on abstract control over underlying hardware through software.",
        "name": "Software Defined Infrastructure",
      "position": {
        "row": 3,
        "col": 2,
        "colspan": 2
      },
      "layers": {
        "Orchestration": {
            "name": "Orchestration",
          "position": {
            "row": 1,
            "col": 1,
            "colspan": 5
          }
        },
        "Compute": {
            "name": "Compute",
          "position": {
            "row": 2,
            "col": 1,
            "colspan": 1
          }
        },
        "Storage": {
            "name": "Storage",
          "position": {
            "row": 2,
            "col": 2,
            "colspan": 1
          }
        },
        "Network": {
            "name": "Network",
          "position": {
            "row": 2,
            "col": 3,
            "colspan": 1
          }
        },
        "Accelerators": {
            "name": "Accelerators",
          "position": {
            "row": 2,
            "col": 4,
            "colspan": 1
          }
        },
        "Security": {
            "name": "Security",
          "position": {
            "row": 2,
            "col": 5,
            "colspan": 1
          }
        }
      }
    },
    "Physical Layer": {
        "name": "Physical Layer",
      "description": "Acts as the logical representation of the lower physical layer.",
      "position": {
        "row": 4,
        "col": 2,
        "colspan": 2
      },
      "layers": {
        "Edge Devices": {
            "name": "Edge Devices",
          "position": {
            "row": 1,
            "col": 1
          }
        },
        "OT Devices": {
            "name": "OT Devices",
          "position": {
            "row": 1,
            "col": 2,
            "colspan": 1
          }
        },
        "Mobile Devices": {
            "name": "Mobile Devices",
          "position": {
            "row": 1,
            "col": 3,
            "colspan": 1
          }
        },
        "Labtops and Desktops": {
            "name": "Labtops and Desktops",
          "position": {
            "row": 1,
            "col": 4,
            "colspan": 1
          }
        },
        "Datacenter Devices": {
            "name": "Datacenter Devices",
          "position": {
            "row": 2,
            "col": 1,
            "colspan": 1
          }
        },
        "Private Cloud": {
            "name": "Private Cloud",
          "position": {
            "row": 2,
            "col": 2,
            "colspan": 1
          }
        },
        "Public Cloud": {
            "name": "Public Cloud",
          "position": {
            "row": 2,
            "col": 3,
            "colspan": 1
          }
        }
      }
    },
    "Identity Aspect": {
      "description": "Manages all identity-related elements like authentication and user properties.",
        "name": "Identity Aspect",
      "position": {
        "row": 1,
        "col": 1,
        "rowspan": 4
      },
      "layers": {
        "Access": {
            "name": "Access",
          "position": {
            "row": 1,
            "col": 1
          }
        },
        "Authorization": {
            "name": "Authorization",
          "position": {
            "row": 2,
            "col": 1
          }
        },
        "Authentication": {
            "name": "Authentication",
          "position": {
            "row": 3,
            "col": 1
          }
        },
        "Key Management": {
            "name": "Key Management",
          "position": {
            "row": 4,
            "col": 1
          }
        }
      }
    },
    "Security Aspect": {
      "name": "Security Aspect",
      "description": "Manages all identity-related elements like authentication and user properties.",
      "position": {
        "row": 1,
        "col": 4,
        "rowspan": 4
      },
      "assets": {
        "GEAR3": {
          "name": "GEAR Security Architecture document",
          "url": "https://www.intel.com/content/www/us/en/content-details/790385/government-conceptual-enterprise-architecture-gear.html?wapkw=Government%20Enterprise%20Architecture",
          "description": "The Security Aspect of the Government Enterprise Architecture Reference (GEAR) Logical View integrates protection mechanisms such as encryption, intrusion detection, and threat mitigation across all layers of the architecture. It ensures that all parts of the enterprise are safeguarded against evolving threats by embedding security measures into the Organizational, Process, and Physical Layers. This approach enables a resilient, policy driven environment capable of addressing diverse threats across every architecture layer"
        }
      },
      "layers": {
        "Architecture & Trust Foundations": {
            "name": "Architecture & Trust Foundations",
          "description": "Establishes principles of security by design and zero-trust architecture, defining core building blocks like product assurance, secure boot, attestation, and trusted execution environments.",
          "position": {
            "row": 4,
            "col": 1,
            "colspan": 3
          },
          "layers": {
            "Product Security Assurance & Secure Supply Chain": {
                "name": "Product Security Assurance & Secure Supply Chain",
              "description": "Ensures hardware and firmware integrity through proactive issue remediation and secure supply chain practices.",
              "position": {
                "row": 1,
                "col": 1
              }
            },
            "Zero Trust Architecture": {
                "name": "Zero Trust Architecture",
              "description": "Assumes all computing operates in a hostile environment, enforcing strict identity-based authentication and authorization.",
              "position": {
                "row": 2,
                "col": 1
              }
            },
            "Root of Trust": {
                "name": "Root of Trust",
              "description": "Incorporates hardware-based security technologies to establish a foundation of trust within the execution environment.",
              "position": {
                "row": 3,
                "col": 1
              }
            },
            "Secure Boot & Attestation": {
                "name": "Secure Boot & Attestation",
              "description": "Ensures systems start and operate only with verified and authorized code, preventing execution of malicious or tampered code.",
              "position": {
                "row": 4,
                "col": 1
              }
            }
          },
          "Trusted Execution Environments (TEE) / Confidential Computing": {
                "name": "Trusted Execution Environments (TEE) / Confidential Computing",
            "description": "Protects data in use in shared environments, ensuring only authorized users have access and preventing tampering, viewing, or theft.",
            "position": {
              "row": 5,
              "col": 1
            }
          }
        },
        "Infrastructure & Host Security": {
            "name": "Infrastructure & Host Security",
          "description": "Enforces hardening and protective measures across servers, containers, and edge devices, including runtime protections, host-based firewalls, and endpoint detection and response.",
          "position": {
            "row": 2,
            "col": 1
          },
          "layers": {
            "System Hardening": {
                "name": "System Hardening",
              "description": "Reduces the attack surface by configuring and securing software components to minimize vulnerabilities.",
              "position": {
                "row": 1,
                "col": 1
              }
            },
            "Runtime Protection": {
                "name": "Runtime Protection",
              "description": "Maintains secure execution environments for applications, containers, and virtual machines during runtime.",
              "position": {
                "row": 2,
                "col": 1
              }
            },
            "Host-based Firewalls & EDR": {
                "name": "Host-based Firewalls & EDR",
              "description": "Safeguards individual systems and endpoints by filtering network traffic and detecting potential threats.",
              "position": {
                "row": 3,
                "col": 1
              }
            },
            "Edge Security": {
                "name": "Edge Security",
              "description": "Ensures devices and systems operating at the network's edge are protected against physical and cyber threats.",
              "position": {
                "row": 4,
                "col": 1
              }
            }
          }
        },
        "Network & Communications Security": {
            "name": "Network & Communications Security",
          "description": "Protects the confidentiality and integrity of data in motion, leveraging technologies like microsegmentation, SDN-based controls, and pervasive encryption.",
          "position": {
            "row": 3,
            "col": 1,
            "colspan": 2
          },
          "layers": {
            "East-West & North-South Encryption": {
                "name": "East-West & North-South Encryption",
              "description": "Secures traffic entering, exiting, and moving laterally within a network to maintain data confidentiality and integrity.",
              "position": {
                "row": 1,
                "col": 1
              }
            },
            "Microsegmentation": {
                "name": "Microsegmentation",
              "description": "Divides networks into granular, isolated segments with tailored security policies to prevent lateral movement of threats.",
              "position": {
                "row": 2,
                "col": 1
              }
            },
            "SDN Security": {
                "name": "SDN Security",
              "description": "Applies dynamic security policies and monitors traffic flows in real time using a centralized controller.",
              "position": {
                "row": 3,
                "col": 1
              }
            },
            "DDoS Protection": {
                "name": "DDoS Protection",
              "description": "Protects against large-scale attacks that aim to overwhelm network resources and disrupt service availability.",
              "position": {
                "row": 4,
                "col": 1
              }
            }
          }
        },
        "Data & Application Security": {
            "name": "Data & Application Security",
          "description": "Embeds security into the application lifecycle and data handling practices, including encryption across all data states, robust secrets management, and secure development practices.",
          "position": {
            "row": 2,
            "col": 2
          },
          "layers": {
            "Encryption": {
                "name": "Encryption",
              "description": "Protects data in storage and on the network using strong encryption algorithms.",
              "position": {
                "row": 1,
                "col": 1
              }
            },
            "Secure Software Supply Chain": {
                "name": "Secure Software Supply Chain",
              "description": "Ensures the integrity and trustworthiness of all components within the software stack.",
              "position": {
                "row": 2,
                "col": 1
              }
            },
            "DevSecOps & CI/CD Security": {
                "name": "DevSecOps & CI/CD Security",
              "description": "Integrates security into the CI/CD pipeline, ensuring secure coding practices and automated vulnerability scanning.",
              "position": {
                "row": 3,
                "col": 1
              }
            }
          }
        },
        "Threat Detection & Response": {
            "name": "Threat Detection & Response",
          "description": "Provides real-time monitoring and analysis of system behavior to combat evolving threats, including tools like EDR/XDR, user and entity behavior analytics, and deception technologies.",
          "position": {
            "row": 2,
            "col": 3,
            "rowspan": 2
          },
          "layers": {
            "EDR/XDR": {
                "name": "EDR/XDR",
              "description": "Monitors endpoints for suspicious behavior and aggregates data across multiple domains for centralized threat correlation.",
              "position": {
                "row": 1,
                "col": 1
              }
            },
            "Threat Intelligence & Analytics": {
                "name": "Threat Intelligence & Analytics",
              "description": "Integrates real-time threat intelligence feeds and machine learning-based analytics to detect anomalies and emerging threats.",
              "position": {
                "row": 2,
                "col": 1
              }
            },
            "UEBA & Insider Threat Detection": {
                "name": "UEBA & Insider Threat Detection",
              "description": "Profiles users and entities to detect deviations from established behavior and uncover insider threats.",
              "position": {
                "row": 3,
                "col": 1
              }
            },
            "Deception Technologies": {
                "name": "Deception Technologies",
              "description": "Uses deception tools to lure adversaries into controlled traps, triggering immediate investigation or automated containment.",
              "position": {
                "row": 4,
                "col": 1
              }
            }
          }
        },
        "Resilience, Remediation & Compliance": {
            "name": "Resilience, Remediation & Compliance",
          "description": "Ensures systems can recover from compromise while meeting regulatory and operational mandates, covering automated recovery playbooks, audit logging, security chaos engineering, and SBOMs.",
          "position": {
            "row": 1,
            "col": 1,
            "colspan": 3
          },
          "layers": {
            "Remediation & Recovery Playbooks": {
                "name": "Remediation & Recovery Playbooks",
              "description": "Predefined, tested incident response and recovery playbooks embedded into orchestration layers.",
              "position": {
                "row": 1,
                "col": 1
              }
            },
            "Security Chaos Engineering": {
                "name": "Security Chaos Engineering",
              "description": "Deliberately injects faults, attacks, or misconfigurations into systems to test their resilience.",
              "position": {
                "row": 2,
                "col": 1
              }
            },
            "Audit Logging & Compliance": {
                "name": "Audit Logging & Compliance",
              "description": "Captures security-relevant events across the stack, ensuring integrity for forensic analysis, compliance audits, and incident reviews.",
              "position": {
                "row": 3,
                "col": 1
              }
            },
            "Supply Chain Security & SBOM": {
                "name": "Supply Chain Security & SBOM",
              "description": "Generates and maintains a complete and traceable Software Bill of Materials for every build artifact.",
              "position": {
                "row": 4,
                "col": 1
              }
            }
          }
        }
      }
    }
  }
};

export default data;
