import 'package:flutter/material.dart';
import 'package:flutter_travel/util/adventure_places.dart';
import 'package:flutter_travel/util/const.dart';
import 'package:flutter_travel/util/cultural_places.dart';
import 'package:flutter_travel/util/spiritual_places.dart';
import 'package:flutter_travel/widgets/icon_badge.dart';
import 'package:flutter_travel/widgets/search_bar.dart';
import 'package:flutter_travel/widgets/titled_navigation_barItem.dart';
import 'package:flutter_travel/widgets/upper_navigation_bar.dart';
import 'package:flutter_travel/widgets/vertical_place_item.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  List<dynamic> places = spiritualPlaces;
  int topMenuPosition = 0;

  @override
  Widget build(BuildContext context) {
    var screenHeight = MediaQuery.of(context).size.width;
    return Scaffold(
      appBar: AppBar(
        actions: <Widget>[
          IconButton(
            icon: IconBadge(
              icon: Icons.notifications_none,
              color: Constants.iconAppBarThemeLight.color,
            ),
            onPressed: () {},
          ),
        ],
        title: Padding(
          padding: const EdgeInsets.only(left: 25, top: 10),
          child: Center(
            child: Image.asset(
              "assets/logo.png",
              height: 70,
            ),
          ),
        ),
      ),
      body: ListView(
        children: <Widget>[
          Container(
            color: Theme.of(context).appBarTheme.backgroundColor,
            height: screenHeight < 500
                ? 110
                : screenHeight > 800
                    ? 300
                    : screenHeight * 0.23,
            child: Padding(
              padding: EdgeInsets.all(30),
              child: Column(
                children: [
                  SearchBar(),
                ],
              ),
            ),
          ),
          TitledBottomNavigationBar(
              currentIndex:
                  topMenuPosition, // Use this to update the Bar giving a position
              onTap: (index) {
                updateBodyListPlaces(index);
              },
              items: [
                TitledNavigationBarItem(
                    title: Text('Espiritual'), icon: Icon(Icons.all_inclusive)),
                TitledNavigationBarItem(
                    title: Text('Aventura'), icon: Icon(Icons.motorcycle)),
                TitledNavigationBarItem(
                    title: Text('Cultural'), icon: Icon(Icons.book)),
              ]),
          //buildHorizontalList(context),
          buildVerticalList(),
        ],
      ),
    );
  }

  void updateBodyListPlaces(int index) {
    setState(() {
      if (index == 0) places = spiritualPlaces;
      if (index == 1) places = adventurePlaces;
      if (index == 2) places = culturalPlaces;
      topMenuPosition = index;
    });
  }

  buildVerticalList() {
    return Padding(
      padding: EdgeInsets.all(20.0),
      child: ListView.builder(
        primary: false,
        physics: NeverScrollableScrollPhysics(),
        shrinkWrap: true,
        itemCount: places.length,
        itemBuilder: (BuildContext context, int index) {
          Map place = places[index];
          return VerticalPlaceItem(place: place);
        },
      ),
    );
  }
}
