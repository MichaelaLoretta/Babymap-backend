//Mongoose Models

const Playground = require("../models/Playground.js");
const DiaperStation = require("../models/DiaperStation.js");
const NursingRoom = require("../models/NursingRoom.js");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLFloat,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");

//NursingRoom Type

const NursingRoomType = new GraphQLObjectType({
  name: "NursingRoom",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    lat: { type: GraphQLFloat },
    lng: { type: GraphQLFloat },
    address: { type: GraphQLString },
    img: { type: GraphQLString },
    url: { type: GraphQLString },
  }),
});

// DiaperStation Type

const DiaperStationType = new GraphQLObjectType({
  name: "DiaperStation",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    lat: { type: GraphQLFloat },
    lng: { type: GraphQLFloat },
    address: { type: GraphQLString },
    url: { type: GraphQLString },
  }),
});

// Playground Type

const PlaygroundType = new GraphQLObjectType({
  name: "Playground",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    lat: { type: GraphQLFloat },
    lng: { type: GraphQLFloat },
    address: { type: GraphQLString },
    url: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    playgrounds: {
      type: new GraphQLList(PlaygroundType),
      resolve(parent, args) {
        return Playground.find();
      },
    },
    playground: {
      type: PlaygroundType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Playground.findById(args.id);
      },
    },
    diaperStations: {
      type: new GraphQLList(DiaperStationType),
      resolve(parent, args) {
        return DiaperStation.find();
      },
    },
    diaperStation: {
      type: DiaperStationType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return DiaperStation.findById(args.id);
      },
    },
    nursingRooms: {
      type: new GraphQLList(NursingRoomType),
      resolve(parent, args) {
        return NursingRoom.find();
      },
    },
    nursingRoom: {
      type: NursingRoomType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return NursingRoom.findById(args.id);
      },
    },
  },
});

//Add Playground
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addPlayground: {
      type: PlaygroundType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        lat: { type: new GraphQLNonNull(GraphQLFloat) },
        lng: { type: new GraphQLNonNull(GraphQLFloat) },
        address: { type: new GraphQLNonNull(GraphQLString) },
        url: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let playground = new Playground({
          name: args.name,
          description: args.description,
          lat: args.lat,
          lng: args.lng,
          address: args.address,
          url: args.url,
        });
        return playground.save();
      },
    },
    deletePlayground: {
      type: PlaygroundType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Playground.findByIdAndRemove(args.id);
      },
    },
    updatePlayground: {
      type: PlaygroundType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        lat: { type: GraphQLFloat },
        lng: { type: GraphQLFloat },
        address: { type: GraphQLString },
        url: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Playground.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              description: args.description,
              lat: args.lat,
              lng: args.lng,
              address: args.address,
              url: args.url,
            },
          },
          { new: true }
        );
      },
    },
    //Add DiaperStation
    addDiaperStation: {
      type: DiaperStationType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        lat: { type: new GraphQLNonNull(GraphQLFloat) },
        lng: { type: new GraphQLNonNull(GraphQLFloat) },
        address: { type: new GraphQLNonNull(GraphQLString) },
        url: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let diaperStation = new DiaperStation({
          name: args.name,
          description: args.description,
          lat: args.lat,
          lng: args.lng,
          address: args.address,
          url: args.url,
        });
        return diaperStation.save();
      },
    },
    deleteDiaperStation: {
      type: DiaperStationType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return DiaperStation.findByIdAndRemove(args.id);
      },
    },
    updateDiaperStation: {
      type: DiaperStationType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        lat: { type: GraphQLFloat },
        lng: { type: GraphQLFloat },
        address: { type: GraphQLString },
        url: { type: GraphQLString },
      },
      resolve(parent, args) {
        return DiaperStation.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              description: args.description,
              lat: args.lat,
              lng: args.lng,
              address: args.address,
              url: args.url,
            },
          },
          { new: true }
        );
      },
    },

    //Add NursingRoom
    addNursingRoom: {
      type: NursingRoomType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        lat: { type: new GraphQLNonNull(GraphQLFloat) },
        lng: { type: new GraphQLNonNull(GraphQLFloat) },
        address: { type: new GraphQLNonNull(GraphQLString) },
        url: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let nursingRoom = new NursingRoom({
          name: args.name,
          description: args.description,
          lat: args.lat,
          lng: args.lng,
          address: args.address,
          url: args.url,
        });
        return nursingRoom.save();
      },
    },
    deleteNursingRoom: {
      type: NursingRoomType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return NursingRoom.findByIdAndRemove(args.id);
      },
    },
    updateNursingRoom: {
      type: NursingRoomType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        lat: { type: GraphQLFloat },
        lng: { type: GraphQLFloat },
        address: { type: GraphQLString },
        url: { type: GraphQLString },
      },
      resolve(parent, args) {
        return NursingRoom.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              description: args.description,
              lat: args.lat,
              lng: args.lng,
              address: args.address,
              url: args.url,
            },
          },
          { new: true }
        );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
