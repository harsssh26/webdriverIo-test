import { AccountPartyType, LegalEntities } from "../enums/common.ts";

export default {
        BRENT_PACOCHA: {
            NAME: "Brent Pacocha",
            LEGAL_ENTITY_TYPE: LegalEntities.INDIVIDUAL,
            PARTY_TYPE: AccountPartyType.NATURAL_MULTIPLE_JOINT
        },
        BRENT_SPOUSE_PACOCHA: {
            NAME: "Brent_Spouse Pacocha",
            LEGAL_ENTITY_TYPE: LegalEntities.INDIVIDUAL,
            PARTY_TYPE: AccountPartyType.NATURAL_MULTIPLE_JOINT
        },
        BRENT_ASSOCIATION: {
            NAME: "Brent_Association",
            LEGAL_ENTITY_TYPE: LegalEntities.ASSOCIATION,
            PARTY_TYPE: AccountPartyType.NON_NATURAL
        },
        BRENT_GENERAL_PARTNER: {
            NAME: "Brent_General_Partner",
            LEGAL_ENTITY_TYPE: LegalEntities.GENERAL_PARTNERSHIP,
            PARTY_TYPE: AccountPartyType.NON_NATURAL
        },
        BRENT_PARTNER: {
            NAME: "Brent_Partner",
            LEGAL_ENTITY_TYPE: LegalEntities.PARTNERSHIP,
            PARTY_TYPE: AccountPartyType.NON_NATURAL
        },
        BRENT_REVOCABLE_TRUST: {
            NAME: "Brent_Revocable_Trust",
            LEGAL_ENTITY_TYPE: LegalEntities.REVOCABLE_TRUST,
            PARTY_TYPE: AccountPartyType.NON_NATURAL
        },
        BRENT_ESTATE: {
            NAME: "Brent_Estate",
            LEGAL_ENTITY_TYPE: LegalEntities.ESTATE,
            PARTY_TYPE: AccountPartyType.NON_NATURAL
        },
        BRENT_IRREVOCABLE_TRUST: {
            NAME: "Brent_Irrevocable_Trust",
            LEGAL_ENTITY_TYPE: LegalEntities.IRREVOCABLE_TRUST,
            PARTY_TYPE: AccountPartyType.NON_NATURAL
        }
    }
    
