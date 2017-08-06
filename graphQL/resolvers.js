export default {
  Query: {
    hello: (p, { input }, context) => input,
    loginMember: (p, { membername, memberpassword }, { models }) => 
      models.Member.findOne({
        where: {
          membername,
          memberpassword,
        },
      }),

    allMembers: (p, a, { models }) => models.Member.findAll(),
    getMemberByName: (p, { membername }, { models }) => 
      models.Member.findOne({
        where: {
          membername,
        },
      }),
      
    getMemberById: (p, { id }, { models }) =>
      models.Member.findOne({
        where: {
          id,
        }
      }),
    
    findMembersByBollyId: (p, { bollyId }, { models }) =>
      models.Member.findAll({
        where: {
          bollyId,
        }
      }),

    allBollies: (p, a, { models }) => models.Bolly.findAll(),

    findMessagesByBollyId: (p, { bollyId }, { models }) =>
      models.Message.findAll({
        where: {
          bollyId,
        }
      })

  },

  Mutation: {
    createMember: (p, { input }, { models }) => models.Member.create(input),
    findOrCreateMember: (p, a, { models }) => models.Member.findOrCreate(a),
    updateMember: (p, a, { models }) => models.Member.update(a),
    deleteMember: (p, a, { models }) => models.Member.destroy({ where: a}),

    createBolly: (p, { input }, { models }) => models.Bolly.create(input),

    updateBollyTimeById: (p, { id, streamTime }, { models }) =>
      models.Bolly.findOne({
        where: {
          id: 1
        }
      }).then((bolly) => {
        bolly.update({
          streamTime: streamTime
        })
      }),


    createMessage: (p, { memberId, title, text, bollyId }, { models }) =>
      models.Message.create({
        where: {
          memberId,
          bollyId,
          text,
        }
      }),

    deleteMessageByMessageId: (p, { id }, { models }) => models.Message.destroy({ where: a}),

    deleteAllMessagesByMemberId: (p, { memberId }, { models }) => 
      models.Message.findAll({
        where: {
          memberId,
        }
      }).then((members) => {
        members.forEach((member) => {
          member.destroy();
        })
      })

  },
};


