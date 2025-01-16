

type OpportunityDetails = {
        loanAmount?: string,
        sourcingStrategy?: string,
        collateralClassification?: string,   
        expectedCloseDate?: string
}

type UnderwritingDetails = {
        winProbability?: string,
        facilityFee?: string,
        interestMargin?: string,
        relationshipManager?: string,
        request?: string,
        extensionFee?: string,
        minimumDrawdownAmount?: string,
        isNotional?: boolean,
        isRevolver?: boolean,
        product?: string,
        payerOfFacilityFee?: string,
        partyPayingIndex?: string,
        marginFromSothebys?: string
}

type ContactRoleData = {
        relationshipType: RelationshipType,
        accountName?: string,
        firstName?: string,
        lastName?: string
}

type ContactRoleDetails = {
        contactName: string,
        partyType: RelationshipType,
        isPrimary?: boolean
}