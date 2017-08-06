export default `

  input MemberInput {
    membername: String
    memberpassword: String
  }

  input LoginInput {
    membername: String
    memberpassword: String
  }

  input BollyTimeUpdateInput {
    id: Int!
    streamTime: String!
  }

  input MessageInput {
    memberId: Int!
    text: String!
    bollyId: Int!
  }

  type Member {
    id: Int!
    membername: String!
    memberpassword: String!
    bolly: Int!
  }

  input BollyInput {
    memberId: Int
    title: String
    youTubeURL: String
    streamTime: String
  }

  type Message {
    id: Int!
    time: String!
    memberId: Int!
    text: String!
    bollyId: String!
  }

  type Bolly {
    id: Int
    memberId: Int
    title: String
    youtubeURL: String
    streamTime: String
  }

  type Query {
    hello(input: String!): String!
    loginMember(input: LoginInput): Member
    allMembers: [Member!]!
    getMemberByName(membername: String!): Member
    getMemberById(id: Int!): Member
    findMembersByBollyId(Bolly: String!): [Member]
    allBollies: [Bolly!]!
    findMessagesByBollyId(Bolly: String!): [Message]
  }

  type Mutation {
    createMember(input: MemberInput): Member
    findOrCreateMember(membername: String!): Member
    updateMember(membername: String!): [Int!]
    deleteMember(membername: String!): Int!

    createMessage(input: MessageInput): Message
    deleteMessageByMessageId(id: Int!): Message
    deleteAllMessagesByMemberId(id: Int!): [Message]

    createBolly(input: BollyInput): Bolly
    updateBollyTimeById(input: BollyTimeUpdateInput): Bolly
  }
`;
