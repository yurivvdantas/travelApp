import 'package:flutter/material.dart';
import 'package:flutter_travel/util/const.dart';

class ContactScreen extends StatelessWidget {
  const ContactScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        actions: <Widget>[
          IconButton(
            icon: Icon(
              Icons.edit,
              //IconData: Icons.edit,
              color: Theme.of(context).appBarTheme.iconTheme!.color,
            ),
            onPressed: () {},
          ),
        ],
        title: Padding(
          padding: const EdgeInsets.only(left: 25, top: 10),
          child: Text(
            'My account',
            style: TextStyle(color: Theme.of(context).primaryColor),
          ),
        ),
      ),
      body: ListView(children: [
        Container(
          height: Constants.heightTopBar(context),
          width: double.infinity,
          color: Theme.of(context).appBarTheme.backgroundColor,
          child: Center(
              child: Text(
            "John Doe",
            style:
                TextStyle(color: Theme.of(context).primaryColor, fontSize: 20),
          )),
        ),
        SizedBox(
          height: 30,
        ),
        Padding(
          padding: const EdgeInsets.only(left: 30, bottom: 20),
          child: TextButton(
            style: TextButton.styleFrom(
              textStyle: const TextStyle(
                fontSize: 20,
              ),
            ),
            onPressed: () {},
            child: Text(
              'Favorites',
              style: TextStyle(
                  fontWeight: FontWeight.bold,
                  color: Theme.of(context).appBarTheme.backgroundColor),
            ),
          ),
        ),
        Text('Saved searches'),
        Text('Security and privacy')
      ]),
    );
  }
}
